import {  withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Login from "../features/Login";
import Header from "../components/Header";
const LoginPage = () => {

  return (
    <CssBaseline>
      <Header />
      <Login />
    </CssBaseline>
  );
};
export default withRouter(LoginPage);
