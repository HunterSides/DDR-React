import {  withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Profile from "../features/Profile";
import Header from "../components/Header";
const ProfilePage = () => {

  return (
    <CssBaseline>
        <Header />
        <Profile />
    </CssBaseline>
  );
};
export default withRouter(ProfilePage);
