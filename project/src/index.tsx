import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  GENRE: 'Drama',
  DATE: '2000',
  TITLE: 'The Grand Budapest Hotel'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      genre = {Setting.GENRE}
      date = {Setting.DATE}
      titleFilm = {Setting.TITLE}
    />
  </React.StrictMode>,
);
