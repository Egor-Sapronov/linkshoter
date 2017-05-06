import { contains } from 'lodash/fp';
import { SHORT_LINK_SUCCESS } from '../actions/shortenApi.actions';
import { historySaved, CLEAR_HISTORY } from '../actions/history.actions';

const syncActions = [
  SHORT_LINK_SUCCESS,
  CLEAR_HISTORY,
];

export default (action$, store, { historyService: { save }, Observable }) =>
  action$.filter(action => contains(action.type, syncActions))
    .mergeMap(() =>
      Observable.fromPromise(
        save(store.getState().entities.links),
      )
        .map(historySaved),
    );
