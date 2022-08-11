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
import { FilmInfo } from '../../types/film';

type Props= {
  films: FilmInfo[];
};

const App = ({films}: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<Main films={films} />}/>
      <Route path={AppRoute.Film} element={<Film filmInfo={films[0]} />}/>
      <Route path={AppRoute.SignIn} element={<SignIn />}/>
      <Route path={AppRoute.Review} element={<Review filmInfo={films[0]} />}/>
      <Route path={AppRoute.Player} element={<Player src={films[0].player} />}/>

      <Route path={AppRoute.MyList} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <MyList films={films} />
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
