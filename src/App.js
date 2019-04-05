import React, { Component } from 'react';
//BrowserRouter
import { BrowserRouter } from 'react-router-dom';

//css
// import classes from './App.css';
//Layout
import Layout from './hoc/Layout/Layout';
//Main
import Main from './Containers/Main/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Main />
        </Layout>
      </BrowserRouter>

    );
  }
}

export default App;
