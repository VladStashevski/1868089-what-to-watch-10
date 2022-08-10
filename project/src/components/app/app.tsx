import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main-screen';
import Film from '../../pages/film/film';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Review from '../../pages/review/review';
import Player from '../../pages/player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../../components/private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type Props= {
  genre: string;
  date: string;
  titleFilm: string;
};

const App = ({genre, date, titleFilm}: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<Main genre = {genre} date={date} titleFilm={titleFilm}/>}/>
      <Route path={AppRoute.Film} element={<Film />}/>
      <Route path={AppRoute.SignIn} element={<SignIn />}/>
      <Route path={AppRoute.Review} element={<Review />}/>
      <Route path={AppRoute.Player} element={<Player />}/>

      <Route path={AppRoute.MyList} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <MyList />
        </PrivateRoute>
      }
      />
      <Route
        path={AppRoute.NotFound}
        element={
          <NotFoundScreen />
        }
      />

      <Route path={AppRoute.Other} element={<NotFoundPage />}/>
    </Routes>
  </BrowserRouter>
);

export default App;
