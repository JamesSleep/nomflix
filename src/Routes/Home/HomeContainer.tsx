import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import { HomeProps } from "../../Interfaces";

export default () => {
  const [data, setData] = useState<HomeProps>({
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
