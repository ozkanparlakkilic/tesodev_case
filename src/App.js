import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import List from "./pages/List";
import Link from "./pages/Link";
import { SearchProvider } from "./providers/SearchProvider";

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Router>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/list" exact component={List} />
              <Route path="/link" exact component={Link} />
            </Switch>
          </div>
        </Router>
      </div>
    </SearchProvider>
  );
}

export default App;
