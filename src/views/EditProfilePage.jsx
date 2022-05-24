import {  withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import EditProfile from "../features/EditProfile";
import Header from "../components/Header";
const EditProfilePage = () => {

  return (
    <CssBaseline>
        <Header />
        <EditProfile />
    </CssBaseline>
  );
};
export default withRouter(EditProfilePage);