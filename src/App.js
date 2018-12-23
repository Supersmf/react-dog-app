
import React, { Fragment } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

const App = ({ children }) => (
  <Fragment>
    <div className="wrapper">
      <div className="content">
        <Header />
        <div className="container-fluid">
          {children}
        </div>
      </div>
      <Footer/>
    </div>
  </Fragment>
);

export default App;