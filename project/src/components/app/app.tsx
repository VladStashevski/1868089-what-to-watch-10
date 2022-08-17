import SignIn from '../../pages/sign-in/sign-in';
import Review from '../../pages/review/review';
import Player from '../../pages/player/player';
import Film from '../../pages/film/film';
import MainPage from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFoundPage from '../not-found-page/not-found-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {FilmsCommentsProps} from '../../types/films';


function App({films, comments}: FilmsCommentsProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={ <MainPage films={films} />}/>
        <Route path={AppRoute.SignIn} element={<SignIn />}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList films={films} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film}>
          <Route path=':id' element={<Film films={films} comments={comments} />}/>
        </Route>
        <Route path={AppRoute.Review} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Review films={films} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player films={films} />} />
        <Route path={AppRoute.NotFound} element={<NotFoundScreen />}/>
        <Route path={AppRoute.Other} element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
