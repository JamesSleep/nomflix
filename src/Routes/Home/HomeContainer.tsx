import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

interface HomeData {
  nowPlaying: null | Array<object>;
  upcoming: null | Array<object>;
  popular: null | Array<object>;
  error: null | Array<object>;
  loading: boolean;
}

export default () => {
  const [data, setData] = useState<HomeData>({
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  })
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
