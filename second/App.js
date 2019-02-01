import React, { Component } from 'react';
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);