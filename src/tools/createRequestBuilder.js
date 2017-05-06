export default function createRequestBuilder(baseUrl) {
  return {
    linkStats: shortId => ({
      url: `${baseUrl}/${shortId}/stats`,
      method: 'GET',
      responseType: 'json',
    }),
    shortLink: link => ({
      url: `${baseUrl}/shorten`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
      body: {
        url: link,
      },
    }),
  };
}
