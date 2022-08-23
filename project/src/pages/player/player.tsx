import {useParams} from 'react-router-dom';
import {ScreenProps} from '../../types/films';
import NotFound from '../../components/not-found-page/not-found-page';

function Player({films}: ScreenProps): JSX.Element {
  const params = useParams();
  const id = params.id;
  const film = films.find((movie) => String(movie.id) === id);
  const filmIndexInList: number = Number(id) - 1;

  if (!film) {
    return (
      <NotFound />
    );
  }

  const {videoLink, backgroundImage} = films[filmIndexInList];

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={backgroundImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
