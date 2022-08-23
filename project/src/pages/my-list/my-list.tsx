import {AppRoute} from '../../constants/const';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserLogo from '../../components/logo-user/logo-user';
import {ScreenProps} from '../../types/films';
import FilmsList from '../../components/films-list/films-list';

function MyList({films}: ScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <ul className="user-block">
          <UserLogo path={AppRoute.Main} />
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={films} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
