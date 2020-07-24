import React from "react";
import "./App.scss";
import Header from "./Components/HeaderComponent/Header";
import MoviesContainer from './Components/MoviesContainerComponent/MoviesContainer'
import Footer from "./Components/FooterComponent/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
           <Route exact path="/" component={MoviesContainer}></Route>
          <Route exact path="/favourites" component={MoviesContainer}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
