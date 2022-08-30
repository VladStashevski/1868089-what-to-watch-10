import { useAppSelector } from '../../hooks/use-app-selector';
import Logo from '../logo/logo';
import UserBlock from '../user-logo/user-logo';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import {selectPromoFilm} from '../../store/promo-slice/selector';

export default function AdvertFilm(): JSX.Element {
  const advertFilm = useAppSelector(selectPromoFilm);

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={advertFilm?.backgroundImage}
          alt={advertFilm?.name}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">

        <Logo light={false} />

        <UserBlock />

      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={advertFilm?.posterImage}
              alt={advertFilm?.name}
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">
              {advertFilm?.name}
            </h2>
            <p className="film-card__meta">
              <span className="film-card__genre">
                {advertFilm?.genre}
              </span>
              <span className="film-card__year">
                {advertFilm?.released}
              </span>
            </p>

            {advertFilm && <FilmCardButtons film={advertFilm}/>}

          </div>
        </div>
      </div>
    </section>
  );
}
