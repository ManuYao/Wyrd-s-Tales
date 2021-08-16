import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Maps from './pages/Maps';
import Teams from './pages/Teams';
import NotFounds from './pages/NotFounds';
/**
 * 
 * @author : Yao
 * 
 * 
 */


function App() {
  return (
    <div>

      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Home} /> 
          <Route path="/Abouts" exact component={Abouts} />
          <Route path="/Maps" exact component={Maps} />
          <Route path="/Staff" exact component={Teams} />

          <Route component={NotFounds} />

        </Switch>
      </BrowserRouter>

   </div>
  );
}

export default App;
