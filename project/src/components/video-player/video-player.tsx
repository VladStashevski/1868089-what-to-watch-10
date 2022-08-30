import {useEffect, useRef} from 'react';
import {Film} from '../../types/films';
import {VIDEO_TIMEOUT} from '../../constants/const';

type VideoPlayerProps = {
  activeFilm: number | null;
  film: Film;
}

export default function VideoPlayer({ activeFilm, film }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (activeFilm) {
      setTimeout(() => {
        if(videoRef.current) {
          videoRef.current.play();
        }
      }, VIDEO_TIMEOUT);
    }

    videoRef.current.pause();
  }, [activeFilm]);

  return (
    <video
      className="player__video"
      muted
      loop
      src={film.previewVideoLink}
      poster={film.previewImage}
      ref={videoRef}
    >
    </video>
  );
}
