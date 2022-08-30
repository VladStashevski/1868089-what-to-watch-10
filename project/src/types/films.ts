export type Film = {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  id: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
};

export type FilmStatus = {
  id: number;
  status: number;
};

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number
  email: string;
  name: string
  token: string
  avatarUrl: string;
};
