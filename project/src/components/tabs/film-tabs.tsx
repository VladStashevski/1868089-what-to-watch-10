import {useState} from 'react';
import {Film, TabEvent} from '../../types/films';
import Details from '../film-details/film-detais';
import FilmInfo from '../film-info/film-info';
import Reviews from '../reviews/reviews';
import {Comments} from '../../types/comments';
import FilmTabBar from './film-tabbar';
import {OVERVIEW_TAB} from '../../constants/const';

type TabsProps = {
  comments: Comments;
  currentFilm: Film;
}

function FilmTabs({comments, currentFilm}: TabsProps): JSX.Element {
  const [activeFilmTab, setActiveFilmTab] = useState(OVERVIEW_TAB);

  const tabs = new Map([
    ['Overview', <FilmInfo key={0} film={currentFilm} />],
    ['Details', <Details key={1} film={currentFilm} />],
    ['Reviews', <Reviews key={2} comments={comments} />]
  ]);

  const onTabClick = (evt: TabEvent) => {
    evt.preventDefault();
    setActiveFilmTab(evt.target.textContent);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <FilmTabBar activeTab={activeFilmTab} onTabClick={onTabClick} titleTabs={Array.from(tabs.keys())} />
      </nav>
      {tabs.get(activeFilmTab)}
    </>
  );
}

export default FilmTabs;
