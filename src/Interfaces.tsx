export interface HomeProps {
  nowPlaying: null | Array<object>;
  upcoming: null | Array<object>;
  popular: null | Array<object>;
  error: null | string;
  loading: boolean;
}

export interface TVProps {
  topRated: null | Array<object>;
  popular: null | Array<object>;
  airingToday: null | Array<object>;
  loading: boolean;
  error: null | string;
}

export interface SearchProps {
  movieResults: null | Array<object>;
  tvResults: null | Array<object>;
  searchTerm: null | string;
  loading: boolean;
  error: null | string;
}

export interface DetailProps {
  result: null | object;
  loading: boolean;
  error: null | string;
}