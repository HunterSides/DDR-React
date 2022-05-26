import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import UploadPage from "./views/UploadPage";
import LoginPage from "./views/LoginPage"
import SignupPage from "./views/SignupPage"
import EditProfilePage from "./views/EditProfilePage"
import ProfilePage from "./views/ProfilePage";
import DocumentsPage from "./views/DocumentsPage";
import UserSearchPage from "./views/UserSearchPage";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={UploadPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/documents" exact component={DocumentsPage} />
        <Route path="/search" exact component={UserSearchPage} />
        <Route path="/user/documents" exact component={DocumentsPage} />
        <Route path="/user/profile" exact component={ProfilePage} />
        <Route path="/user/edit-profile" exact component={EditProfilePage} />
      </Switch>
    </div>
  );
}
