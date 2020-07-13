import React from 'react';
import Header from './components/Header/index';
import Api from './services/api'
import Main from './pages/main'

import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
