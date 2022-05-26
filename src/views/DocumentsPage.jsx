import {  withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Documents from "../features/Documents";
import Header from "../components/Header";
const DocumentsPage = () => {

  return (
    <CssBaseline>
        <Header />
        <Documents />
    </CssBaseline>
  );
};
export default withRouter(DocumentsPage);
