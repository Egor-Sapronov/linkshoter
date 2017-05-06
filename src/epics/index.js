import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import statsEpic from './stats.epic';
import shortLink from './shortLink.epic';
import history from './history.epic';
import createRequestBuilder from '../tools/createRequestBuilder';
import historyService from '../tools/historyService';
import responseParseService from '../tools/responseParseService';
import config from '../config';

const requestBuilder = createRequestBuilder(config.api);

const apiService = {
  postShortLink: link => ajax(requestBuilder.shortLink(link)),
  getLinkStats: linkId => ajax(requestBuilder.linkStats(linkId)),
};

export default combineEpics(
  shortLink,
  statsEpic,
  history,
);

export const epicDependencies = {
  apiService,
  historyService,
  responseParseService,
  Observable,
};
