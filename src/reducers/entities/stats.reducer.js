import { SHORT_CODE_STATS_SUCCESS } from '../../actions/shortenApi.actions';
import { CLEAR_HISTORY } from '../../actions/history.actions';

export default function stats(state = {}, action) {
  switch (action.type) {
    case CLEAR_HISTORY:
      return {};
    case SHORT_CODE_STATS_SUCCESS:
      return {
        ...state,
        [action.shortcode]: {
          ...action.stats,
        },
      };
    default:
      return state;
  }
}
