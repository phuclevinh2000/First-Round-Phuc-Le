import Header from './components/Header';
import Home from './components/Home';
import MoreDetail from './components/MoreDetail';
import Footer from './components/Footer';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
        <Header />
      
        <Switch>
          <Route path="/moredetail/:id">
            <MoreDetail />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
     </Router>
  );
}

export default App;
