export default {
  parseShortLink(response) {
    return response.response.shortcode;
  },
  parseLinkStats(response) {
    return {
      redirectCount: response.response.redirectCount,
      lastSeenDate: response.response.lastSeenDate,
      startDate: response.response.startDate,
    };
  },
};
