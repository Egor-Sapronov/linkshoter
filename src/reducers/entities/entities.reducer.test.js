import entitiesSelector from './entities.reducer.selector';

const mockedState = {
  entities: {
    links: {
      aa11: {
        link: 'test.link',
      },
      aass: {
        link: 'test.link',
      },
      ssss: {
        link: 'test.link',
      },
      asdd: {
        link: 'test.link',
      },
    },
    stats: {
      aa11: {
        lastSeenDate: '2017-05-06T04:25:09.663Z',
        redirectCount: 0,
        startDate: '2017-05-06T04:25:09.663Z',
      },
      aass: {
        lastSeenDate: '2017-05-06T04:26:09.663Z',
        redirectCount: 0,
        startDate: '2017-05-06T04:26:09.663Z',
      },
      ssss: {
        lastSeenDate: '2017-05-06T04:23:09.663Z',
        redirectCount: 0,
        startDate: '2017-05-06T04:23:09.663Z',
      },
      asdd: {
        lastSeenDate: '2017-05-06T04:29:09.663Z',
        redirectCount: 0,
        startDate: '2017-05-06T04:29:09.663Z',
      },
    },
  },
};

test('return array of links ordered by date', () => {
  const linksArray = entitiesSelector(mockedState);

  expect(linksArray).toEqual([
    {
      shortcode: 'asdd',
      link: 'test.link',
      redirectCount: 0,
      lastSeenDate: '2017-05-06T04:29:09.663Z',
      startDate: '2017-05-06T04:29:09.663Z',
    }, {
      shortcode: 'aass',
      link: 'test.link',
      redirectCount: 0,
      lastSeenDate: '2017-05-06T04:26:09.663Z',
      startDate: '2017-05-06T04:26:09.663Z',
    }, {
      shortcode: 'aa11',
      link: 'test.link',
      redirectCount: 0,
      lastSeenDate: '2017-05-06T04:25:09.663Z',
      startDate: '2017-05-06T04:25:09.663Z',
    }, {
      shortcode: 'ssss',
      link: 'test.link',
      redirectCount: 0,
      lastSeenDate: '2017-05-06T04:23:09.663Z',
      startDate: '2017-05-06T04:23:09.663Z',
    }
  ]);
});

test('should not include items in array without stats', () => {
  const state = {
    entities: {
      links: mockedState.entities.links,
      stats: {
        aa11: {
          lastSeenDate: '2017-05-06T04:25:09.663Z',
          redirectCount: 0,
          startDate: '2017-05-06T04:25:09.663Z',
        },
        aass: {
          lastSeenDate: '2017-05-06T04:26:09.663Z',
          redirectCount: 0,
          startDate: '2017-05-06T04:26:09.663Z',
        },
      },
    },
  };

  const linksArray = entitiesSelector(state);

  expect(linksArray).toEqual([
    {
      shortcode: 'aass',
      link: 'test.link',
      redirectCount: 0,
      lastSeenDate: '2017-05-06T04:26:09.663Z',
      startDate: '2017-05-06T04:26:09.663Z',
    }, {
      shortcode: 'aa11',
      link: 'test.link',
      redirectCount: 0,
      lastSeenDate: '2017-05-06T04:25:09.663Z',
      startDate: '2017-05-06T04:25:09.663Z',
    },
  ]);
});
