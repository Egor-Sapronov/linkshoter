import { SHORT_LINK, shortLinkSuccess, shortLinkFail } from '../actions/shortenApi.actions';

export default (action$, store, { apiService: { postShortLink }, responseParseService }) =>
  action$.ofType(SHORT_LINK)
    .mergeMap(action => postShortLink(action.link)
      .map(response => response.status === 201
        ? shortLinkSuccess(
            responseParseService.parseShortLink(response),
            action.link,
          )
        : shortLinkFail(),
      ),
    );
