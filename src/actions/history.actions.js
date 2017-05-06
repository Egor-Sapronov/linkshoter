export const HISTORY_SAVED = 'HISTORY_SAVED';
export const LINKS_HISTORY = 'LINKS_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export function historySaved() {
  return {
    type: HISTORY_SAVED,
  };
}

export function linksHistory(links) {
  return {
    type: LINKS_HISTORY,
    links,
  };
}

export function clearHistory() {
  return {
    type: CLEAR_HISTORY,
  };
}
