import React from "react";
import "./App.scss";
import Header from "./Components/HeaderComponent/Header";
import Favourite from "./Components/FavouriteComponent/Favourite";
import MoviesContainer from "./Components/MoviesContainerComponent/MoviesContainer";
import Footer from "./Components/FooterComponent/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={MoviesContainer}
          ></Route>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/favourite"}
            component={Favourite}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
