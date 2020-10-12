import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { textChangeRangeIsUnchanged } from "typescript";
import { moviesApi, tvApi } from "../../api";
import { DetailProps } from "../../Interfaces";
import DetailPresenter from "./DetailPresenter";

interface RouteParams {
  id: string;
}

export default (props: RouteComponentProps<RouteParams>) => {
  const { pathname } = props.location;
  const [data, setData] = useState<DetailProps>({
    result: null,
    loading: true,
    error: null,
    isMovie: pathname.includes("/movie/"),
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { 
      match: {
        params: { id }
      },
      history: { push }
    } = props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (data.isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
      console.log(result);
    } catch {
      setData({ ...data, error: "Can't find anything" });
    } finally {
      setData({ ...data, loading: false, result });
    }
    
  }

  return (
    <DetailPresenter 
      result={data.result}
      loading={data.loading}
      error={data.error}
    />
  )
}