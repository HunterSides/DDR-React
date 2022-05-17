import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import UploadPage from "./views/UploadPage";
import LoginPage from "./views/LoginPage"
import SignupPage from "./views/SignupPage"



export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={UploadPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
      </Switch>
    </div>
    
    
  );
}
