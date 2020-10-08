import React, { useState } from "react";
import TVPresenter from "./TVPresenter";
import { TVProps } from "../../Interfaces";

export default () => {
  const [data, setData] = useState<TVProps>({
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  });
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