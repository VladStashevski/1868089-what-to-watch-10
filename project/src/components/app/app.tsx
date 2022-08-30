import {AppRoute} from '../../constants/const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {Routes, Route} from 'react-router-dom';
import {selectAuthorizationStatus} from '../../store/user-process/selector';
import {selectIsLoadingPromo, selectIsErrorLoadingPromo} from '../../store/promo-slice/selector';
import {selectIsLoadingFilms, selectIsErrorLoadingFilms} from '../../store/films-slice/selector';
import {isAuthorizationStatusDefined} from '../../utils/utils';
import Loading from '../../pages/loading/loading';
import HistoryRouter from '../history-router/history-router';
import MainPage from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../constants/browser-history';
import Error from '../error/error';

function App (): JSX.Element {
  const isLoadingFilms = useAppSelector(selectIsLoadingFilms);
  const isErrorLoadingFilms = useAppSelector(selectIsErrorLoadingFilms);
  const isLoadingPromo = useAppSelector(selectIsLoadingPromo);
  const isErrorLoadingPromo = useAppSelector(selectIsErrorLoadingPromo);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (!isAuthorizationStatusDefined(authorizationStatus) || isLoadingFilms || isLoadingPromo) {
    return (<Loading />);
  }

  if (isErrorLoadingFilms || isErrorLoadingPromo) {
    return (<Error />);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route path={AppRoute.SignIn} element={<SignIn />}/>
        <Route path={AppRoute.MyList} element={<PrivateRoute><MyList /></PrivateRoute>}/>
        <Route path={AppRoute.Film}>
          <Route path=':id' element={<FilmPage />}></Route>
          <Route path=':id/review' element={<PrivateRoute><AddReview /></PrivateRoute>}/>
        </Route>
        <Route path={AppRoute.Player}><Route path=':id' element={<Player />}/></Route>
        <Route path={AppRoute.NotFound} element={<NotFound />}/>
        <Route path={AppRoute.Other} element={<NotFound />}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
