import { combineEpics } from 'redux-observable';
import { shortcodeStatsSuccess, shortcodeStatsFail, SHORT_LINK_SUCCESS } from '../actions/shortenApi.actions';
import { LINKS_HISTORY } from '../actions/history.actions';

export const statsByLink =
  (action$, store, { apiService: { getLinkStats }, responseParseService }) =>
    action$.ofType(SHORT_LINK_SUCCESS)
      .mergeMap(action => getLinkStats(action.shortcode)
        .map(response => response.status === 200
          ? shortcodeStatsSuccess(
            responseParseService.patseLinkStats(response),
            action.shortcode,
          )
          : shortcodeStatsFail(),
        ),
      );

export const statsFromHistory =
  (action$, store, { apiService: { getLinkStats }, responseParseService, Observable }) =>
    action$.ofType(LINKS_HISTORY)
      .mergeMap(action => Observable.of(...Object.keys(action.links))
        .mergeMap(shortcode => getLinkStats(shortcode)
          .map(response => response.status === 200
            ? shortcodeStatsSuccess(
              responseParseService.patseLinkStats(response),
              shortcode,
            )
            : shortcodeStatsFail(),
          ),
        ),
      );

export default combineEpics(
  statsFromHistory,
  statsByLink,
);
