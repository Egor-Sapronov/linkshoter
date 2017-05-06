export default {
  parseShortLink(response) {
    return response.response.shortcode;
  },
  patseLinkStats(response) {
    return {
      redirectCount: response.response.redirectCount,
      lastSeenDate: response.response.lastSeenDate,
      startDate: response.response.startDate,
    };
  },
};
