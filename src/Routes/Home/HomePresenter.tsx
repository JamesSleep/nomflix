import React from "react";

interface HomeProps {
  nowPlaying: null | Array<object>,
  upcoming: null | Array<object>,
  popular: null | Array<object>,
  error: null | Array<object>,
  loading: boolean
}

export default ({ nowPlaying, upcoming, popular, error, loading }: HomeProps) => <div>Home</div>