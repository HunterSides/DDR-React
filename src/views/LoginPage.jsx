/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {  withRouter } from "react-router-dom";

import { apps, user } from "@dash-incubator/dapp-sdk";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { CssBaseline, Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Login from "../components/Login";
import Button from "@material-ui/core/Button";



const LoginPage = () => {


  return (
    <CssBaseline>
        <Login />
    </CssBaseline>
  );
};
export default withRouter(LoginPage);
