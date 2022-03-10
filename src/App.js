import React from 'react';
import './App.css';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
