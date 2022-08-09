import MainScreen from '../../pages/main/main-screen';

type Props= {
  filmGenre: string;
  filmReleaseDate: string;
  filmTitle: string;
};

const App = ({filmGenre, filmReleaseDate, filmTitle}: Props): JSX.Element => (
  <MainScreen
    filmGenre = {filmGenre}
    filmReleaseDate = {filmReleaseDate}
    filmTitle = {filmTitle}
  />
);

export default App;
