import {Link} from 'react-router-dom';

const Logo = (): JSX.Element => (
  <div className="logo">
    <Link className="logo__link" to='/'>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export default Logo;
