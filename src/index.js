import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import createStore from './store/createStore';
import theme from './components/common/theme';
import App from './components/app';
import historyService from './tools/historyService';
import { linksHistory } from './actions/history.actions';
import './index.css';

const store = createStore();

historyService.getSnap()
  .then(links => store.dispatch(linksHistory(links)));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
