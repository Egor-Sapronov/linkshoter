import { SHORT_LINK_SUCCESS } from '../../actions/shortenApi.actions';
import { LINKS_HISTORY, CLEAR_HISTORY } from '../../actions/history.actions';

export default function links(state = {}, action) {
  switch (action.type) {
    case CLEAR_HISTORY:
      return {};
    case LINKS_HISTORY:
      return {
        ...state,
        ...action.links,
      };
    case SHORT_LINK_SUCCESS:
      return {
        ...state,
        [action.shortcode]: {
          link: action.link,
        },
      };
    default:
      return state;
  }
}
