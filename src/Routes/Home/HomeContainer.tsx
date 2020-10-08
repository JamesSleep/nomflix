import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import { HomeProps } from "../../Interfaces";
import { moviesApi } from "../../api";

export default () => {
  const [data, setData] = useState<HomeProps>({
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  });

  useEffect(() => {
    getApiCallback();
  }, []);

  const getApiCallback = async () => {
    try {
      const { 
        data: { results: nowPlaying } 
      } = await moviesApi.nowPlaying();
      const { 
        data: { results: upcoming } 
      } = await moviesApi.upcoming();
      const { 
        data: { results: popular } 
      } = await moviesApi.popular();
      setData({
        ...data,
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      setData({
        ...data,
        error: "Can't get Movies information."
      });
    } finally {
      setData({
        ...data,
        loading: false
      });
    }
  }

  return (
    <HomePresenter 
      nowPlaying={data.nowPlaying}
      upcoming={data.upcoming}
      popular={data.popular}
      error={data.error}
      loading={data.loading}
    />
  )
}
