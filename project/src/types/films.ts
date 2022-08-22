import {Comments} from '../types/comments';

type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

type Films = Film[]

type ScreenProps = {
  films: Films
}

type FilmsCommentsProps = {
  films: Films
  comments: Comments;
}

type FilmTabProps = {
  film: Film;
}

type TabEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent> & {target: {tagName: string; textContent: string}}

export type {ScreenProps, Film, Films, FilmTabProps, FilmsCommentsProps, TabEvent};
