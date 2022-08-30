import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import {ToastContainer} from 'react-toastify';
import React from 'react';
import {store} from './store';
import App from './components/app/app';
import {fetchFilmsAction, fetchPromoFilmAction, getUserDataAction} from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(getUserDataAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
);
