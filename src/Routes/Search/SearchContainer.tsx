import React, { useState } from "react";
import { SearchProps } from "../../Interfaces";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [data, setData] = useState<SearchProps>({
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  })
  return (
    <SearchPresenter 
    movieResults={data.movieResults}
    tvResults={data.tvResults}
    searchTerm={data.searchTerm}
    loading={data.loading}
    error={data.error}
    />
  )
}