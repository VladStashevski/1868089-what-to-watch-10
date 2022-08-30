import {useEffect} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {selectFavoriteFilms, selectIsLoadingFavoriteFilms, selectIsLoadedFavoriteFilms, selectIsErrorLoadingFavoriteFilms } from '../../store/favorite-slice/selector';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import Logo from '../../components/logo/logo';
import FilmsList from '../../components/films-list/films-list';
import Loading from '../loading/loading';
import NoFavoriteFilms from '../../components/no-favorite-films/no-favorite-films';
import UserBlock from '../../components/user-logo/user-logo';

export default function MyList(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(selectFavoriteFilms);
  const isLoadingFavoriteFilms = useAppSelector(selectIsLoadingFavoriteFilms);
  const isErrorLoadingFavoriteFilms = useAppSelector(selectIsErrorLoadingFavoriteFilms);
  const isLoadedFavoriteFilms = useAppSelector(selectIsLoadedFavoriteFilms);

  useEffect(() => {
    if (!isLoadedFavoriteFilms && !isErrorLoadingFavoriteFilms )
    {dispatch(fetchFavoriteFilmsAction());}

  }, [dispatch, isLoadedFavoriteFilms, isErrorLoadingFavoriteFilms]);

  if (isLoadingFavoriteFilms) {
    return (
      <Loading />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false} />

        <h1 className="page-title user-page__title">
          My list
          <span className="user-page__film-count">
            {favoriteFilms.length}
          </span>
        </h1>

        <UserBlock />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {isErrorLoadingFavoriteFilms ?
          (
            <NoFavoriteFilms />
          ) : (
            <div className="catalog__films-list">
              <FilmsList
                films={favoriteFilms}
                showButton={false}
              />
            </div>
          )}

      </section>

      <footer className="page-footer">
        <Logo light />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
