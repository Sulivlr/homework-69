export interface Movie extends ApiMovie {
  id: string;
}

export interface ApiMovie {
  image: string;
  title: string;
  description: string;
}

export interface ApiMovies {
  [id: string]: ApiMovie;
}