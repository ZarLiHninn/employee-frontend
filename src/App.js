import React from 'react';

import './App.css';
import FooterComponents from './Components/FooterComponents';
import HeaderComponents from './Components/HeaderComponents';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponents/>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
            {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponents/>
      </Router>
      
    </div>
  );
}

export default App;
