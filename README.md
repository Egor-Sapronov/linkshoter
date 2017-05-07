## Run
```
yarn
yarn start
```

## Basic conceptions

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For real world, it should be some custom setup, but for quick test exercise, it's a good one.

App styled with [Styled Components](https://github.com/styled-components/styled-components). State managed by [Redux](https://github.com/reactjs/redux). Async data flow handled with [Redux Observable](https://github.com/redux-observable/redux-observable).

### Components
Components used like low-level styling constructs. All reusable components located in [components/common](./src/components/common).
```
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.layout};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

Flex.defaultProps = {
  justify: 'flex-start',
  align: 'stretch',
  layout: 'column',
};

export default Flex;
```
[Flex component](./src/components/common/flex.component.js) is a good example. I reuse it across all project. Also it could be customized with props.
```
// Children will be aligned in row direction
<Flex layout="row">
  <Child />
  <Child />
</Flex>

// Children will be aligned in column direction
<Flex layout="column">
  <Child />
  <Child />
</Flex>
```
Common components don't fully customizable as they could be and options mostly depend on my needs and I don't touch all of them, but I'm not trying to create UI components library.

In [theme.js](./src/components/common/theme.js) I defined all common variables like fonts, colors etc. There is example how to use it in components.
```
import styled from 'styled-components';

export default styled.p`
  font-weight: ${props => props.theme.font.fontWeightLight};
`;
```

All other components are the composition of common components with small customization based on the mockup.
```
const StyledTitle = styled(Title)`
  margin-right: ${props => props.theme.calcGrid(2)};
`;

const ShortHistoryHeader = props => (
  <Flex layout="row" justify="flex-start" align="center">
    <StyledTitle>
      Previously shortened by you
    </StyledTitle>

    <Action
      onClick={props.handleActionClick}
    >
      Clear history
    </Action>
  </Flex>
);
```
Big components like [ShortHistory component](./src/components/shortHistory/shortHistory.component.js) broken down in smaller.

### App state

App has one point of state — data from shortening API.

![state](https://image.ibb.co/gpVJo5/appstate.png)

[Entities reducer](./src/reducers/entities/entities.reducer.js) is a general store for normalized data from API. Data stored as it comes from API, then builded to list of links by [Entities selector](./src/reducers/entities/entities.reducer.selector.js), and finally in components became human readable(date formatting).

### Side effects handling

There are two side effects points: saving history to localStorage and API calls. [History epic](./src/epics/history.epic.js) saves (Links)[./src/reducers/entities/links.reducer.js] on every action which mean that there are new links in state. (Links epic)[./src/epics/shortLink.epic.js] and (Stats epic)[./src/epics/stats.epic.js] download data from API.

Important point is that epics don't deal directly with localStorage and API. All this logic moved to services in (tools)[./src/tools] and passed to epics as dependencies.
```
export const statsByLink =
  (action$, store, { apiService: { getLinkStats }, responseParseService }) =>
    action$.ofType(SHORT_LINK_SUCCESS)
      .mergeMap(action => getLinkStats(action.shortcode)
        .map(response => response.status === 200
          ? shortcodeStatsSuccess(
            responseParseService.parseLinkStats(response),
            action.shortcode,
          )
          : shortcodeStatsFail(),
        ),
      );
```

Staff like parsing response also moved to dependencies, so epic doesn't matter how to get and parse data. Epic only deal with the data flow.

For example, if I will decide change storage from localStorage to database on the backend I will change only one place — implementation of [History service](./src/tools/historyService.js).

### Conclusion
My main goal was to create the app based on the composition of small single responsible blocks grouped in modules. Some staff not implemented like bundle size optimization, caching API requests and tests(I made the small test for [Entities selector](./src/reducers/entities/entities.reducer.selector.js), but in the real world epics also should be covered with tests).

Another point to improve is [config](./src/config.js). Now config variables just hard coded in the file, but in the real world, they should depend on the specific environment because usually API domains and etc different on dev, test and production environments. It could be done via environment variables or injected into index.html if we need to change them on the fly.

Btw, the app doesn't have production mode and only operates in dev environment.
