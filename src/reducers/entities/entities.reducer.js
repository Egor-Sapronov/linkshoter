import { combineReducers } from 'redux';
import links from './links.reducer';
import stats from './stats.reducer';

export default combineReducers({
  stats,
  links,
});
