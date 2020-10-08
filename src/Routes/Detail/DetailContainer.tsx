import React, { useState } from "react";
import { DetailProps } from "../../Interfaces";
import DetailPresenter from "./DetailPresenter";

export default () => {
  const [data, setData] = useState<DetailProps>({
    result: null,
    loading: true,
    error: null
  });
  return (
    <DetailPresenter 
    result={data.result}
    loading={data.loading}
    error={data.error}
    />
  )
}