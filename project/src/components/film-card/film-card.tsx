import { Link } from 'react-router-dom';
import {FilmInfo} from '../../types/film';

type Props= {
  filmInfo: FilmInfo;
};

const FilmCard = ({filmInfo}: Props): JSX.Element => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={filmInfo.src} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to="/films/:id">{filmInfo.title}</Link>
    </h3>
  </article>
);

export default FilmCard;
