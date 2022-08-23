export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  Review = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not_found',
  Other = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const filmTabNames = [
  'Overview',
  'Details',
  'Reviews'
];

export const MAX_SHOW_SIMILAR_FILMS = 4;

export const TIME_UNTIL_ACTIVATION_PREVIEW = 1000;

export const ALL_GENRES = 'All genres';

export const RATING_STARS_COUNT = 10;

export const OVERVIEW_TAB = 'Overview';

export const AMOUNT_FILMS_PER_STEP = 8;

export const HOUR_IN_MINUTES = 60;

export enum TextFormRating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome'
}
