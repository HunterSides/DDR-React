import React from "react";

import UploadPage from "./views/UploadPage";

import { BrowserRouter as Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={UploadPage} />
      </Switch>
    </div>
  );
}
