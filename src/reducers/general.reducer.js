import { SHORT_LINK_SUCCESS, SHORT_LINK_FAIL, SHORT_CODE_STATS_FAIL } from '../actions/shortenApi.actions';

export default function general(state = {}, action) {
  switch (action.type) {
    case SHORT_LINK_SUCCESS:
      return {
        ...state,
        lastAddedShortcode: action.shortcode,
        isApiError: false,
      };
    case SHORT_LINK_FAIL:
    case SHORT_CODE_STATS_FAIL:
      return {
        ...state,
        isApiError: true,
      };
    default:
      return state;
  }
}
