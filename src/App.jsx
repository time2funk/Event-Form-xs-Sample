import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Events from './components/Events';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Events />
        </div>
      </Provider>
    );
  }
}

export default App;
