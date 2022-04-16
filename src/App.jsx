import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import TvShow from './pages/TvShow/TvShow';

function App() {

  return (
    <div className='screen'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={'/movie'}> <Movies /> </Route>
          <Route exact path={'/tv'}> <TvShow /> </Route>
          {/* <Route> <Page404 /> </Route> */}
        </Switch>
      </ BrowserRouter>
    </div>
  );
}

export default App;
