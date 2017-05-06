import { combineReducers } from 'redux';
import entities from './entities/entities.reducer';
import general from './general.reducer';

export default combineReducers({
  general,
  entities,
});
