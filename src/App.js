import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/output.css';
import { Navigation } from './containers/Navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
