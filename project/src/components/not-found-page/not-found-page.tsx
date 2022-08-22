import {Link} from 'react-router-dom';
import { AppRoute } from '../../constants/const';

const NotFoundPage = (): JSX.Element => (
  <>
    <h1>404. Page not found</h1>
    <Link to={AppRoute.Main}>Go to main page</Link>
  </>
);

export default NotFoundPage;
