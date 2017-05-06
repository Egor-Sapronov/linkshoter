export const SHORT_LINK = 'SHORT_LINK';
export const SHORT_LINK_SUCCESS = 'SHORT_LINK_SUCCESS';
export const SHORT_LINK_FAIL = 'SHORT_LINK_FAIL';
export const SHORT_CODE_STATS_SUCCESS = 'SHORT_CODE_STATS_SUCCESS';
export const SHORT_CODE_STATS_FAIL = 'SHORT_CODE_STATS_FAIL';

export function shortLink(link) {
  return {
    type: SHORT_LINK,
    link,
  };
}

export function shortLinkSuccess(shortcode, link) {
  return {
    type: SHORT_LINK_SUCCESS,
    shortcode,
    link,
  };
}

export function shortLinkFail() {
  return {
    type: SHORT_LINK_FAIL,
  };
}

export function shortcodeStatsSuccess(stats, shortcode) {
  return {
    type: SHORT_CODE_STATS_SUCCESS,
    stats,
    shortcode,
  };
}

export function shortcodeStatsFail() {
  return {
    type: SHORT_CODE_STATS_FAIL,
  };
}
