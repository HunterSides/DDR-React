import React from "react";
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/catalog" element={<DocumentsPage />} />
        <Route path="/users" element={<UserSearchPage />} />
        <Route path="/user/documents" element={<DocumentsPage />} />
        <Route path="/user/profile" element={<ProfilePage />} />
        <Route path="/user/edit-profile" element={<EditProfilePage />} />
      </Routes>
    </div>
  );
}
