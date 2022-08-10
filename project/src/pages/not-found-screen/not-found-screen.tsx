import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">

      <div className="page-content" style={{ textAlign: 'center' }}>
        <h2>404</h2>
        <p>Seems like a page your are looking for doesn&apos;t exist.</p>
        <p>Maybe proceed to <Link to={AppRoute.Main} className="small-film-card__link">main page</Link> and try again?</p>
      </div>

    </div>
  );
}

export default NotFoundScreen;
