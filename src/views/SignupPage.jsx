import {  withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Signup from "../features/Signup";
import Header from "../components/Header";
const SignupPage = () => {

  return (
    <CssBaseline>
        <Header />
        <Signup />
    </CssBaseline>
  );
};
export default withRouter(SignupPage);
