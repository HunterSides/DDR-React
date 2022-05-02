import React from "react";

import UploadPage from "./views/UploadPage";
import LoginPage from "./views/LoginPage"
import { BrowserRouter as Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={UploadPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </div>
  );
}
