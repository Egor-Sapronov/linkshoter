import {
  flow,
  keys,
  filter,
  map,
  sortBy,
  isEmpty,
  reverse,
} from 'lodash/fp';

export default function entitiesSelector(state) {
  return flow([
    keys,
    filter(key => !isEmpty(state.entities.stats[key])),
    map(key => ({
      shortcode: key,
      ...state.entities.links[key],
      ...state.entities.stats[key],
    })),
    sortBy('startDate'),
    reverse,
  ])(state.entities.links);
}
