import React, { useState } from "react";
import { moviesApi, tvApi } from "../../api";
import { SearchProps } from "../../Interfaces";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [data, setData] = useState<SearchProps>({
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  });

  const handleSubmit = () => {
    if (data.searchTerm !== "") {
      searchByTerm();
    }
  }

  const searchByTerm = async () => {
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(data.searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(data.searchTerm);
      setData({
        ...data, 
        loading: true,
        movieResults,
        tvResults
      });
    } catch {
      setData({
        ...data,
        error: "Can't find results."
      });
    } finally {
      setData({
        ...data,
        loading: false
      });
    }
  }

  return (
    <SearchPresenter 
      movieResults={data.movieResults}
      tvResults={data.tvResults}
      searchTerm={data.searchTerm}
      loading={data.loading}
      error={data.error}
      handleSubmit={handleSubmit}
    />
  )
}