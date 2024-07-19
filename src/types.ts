export interface Movie {
  show: ApiMovie;
}

export interface ApiMovie {
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  name: string
  id: number;
}

