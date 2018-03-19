import React from "react";
import { render } from "react-dom";
import './main.scss';
import App from './components/App';

render(<App />, document.getElementById("app"));

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

if (module.hot) {
  module.hot.accept(() => {
      renderApp(App)
  })
}

