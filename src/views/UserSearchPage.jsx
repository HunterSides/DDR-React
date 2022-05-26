import {  withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import UserSearch from "../features/UserSearch";
import Header from "../components/Header";
const UserSearchPage = () => {

  return (
    <CssBaseline>
        <Header />
        <UserSearch />
    </CssBaseline>
  );
};
export default withRouter(UserSearchPage);
