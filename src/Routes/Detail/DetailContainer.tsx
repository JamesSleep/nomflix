import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { DetailProps } from "../../Interfaces";
import DetailPresenter from "./DetailPresenter";

interface RouteParams {
  id: string;
}

export default (props: RouteComponentProps<RouteParams>) => {
  const [data, setData] = useState<DetailProps>({
    result: null,
    loading: true,
    error: null
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
  }

  return (
    <DetailPresenter 
    result={data.result}
    loading={data.loading}
    error={data.error}
    />
  )
}