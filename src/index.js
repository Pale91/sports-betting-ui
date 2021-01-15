import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  events: [{
    id: 1,
    name: "Event 1",
    odds1stTeam: 1.2,
    oddsForDraw: 2.0,
    odds2ndTeam: 1.5
  },
  {
    id: 2,
    name: "Event 2",
    odds1stTeam: 1.2,
    oddsForDraw: 2.0,
    odds2ndTeam: 1.5
  }]
};

const store = createStore((state) => state, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
