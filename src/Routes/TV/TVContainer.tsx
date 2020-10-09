import React, { useEffect, useState } from "react";
import TVPresenter from "./TVPresenter";
import { TVProps } from "../../Interfaces";
import { tvApi } from "../../api";

export default () => {
  const [data, setData] = useState<TVProps>({
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { 
        data: { results: topRated }
      } = await tvApi.topRated();
      const { 
        data: { results: popular }
      } = await tvApi.popular();
      const { 
        data: { results: airingToday }
      } = await tvApi.airingToday();
      setData({...data, topRated, popular, airingToday});
    } catch {
      setData({
        ...data,
        error: "Can't find movie information"
      });
    } finally {
      setData({
        ...data,
        loading: false
      });
    }
  }

  return (
    <TVPresenter 
      topRated={data.topRated}
      popular={data.popular}
      airingToday={data.airingToday}
      loading={data.loading}
      error={data.error}
    />
  )
}