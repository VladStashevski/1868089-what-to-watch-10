import browserHistory from '../../constants/browser-history';
import {Middleware} from 'redux';
import {rootReducer} from '../../store/reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'films/redirectToRoute') {
          browserHistory.push(action.payload);
        }
        return next(action);
      };
