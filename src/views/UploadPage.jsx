/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect, useHistory, withRouter } from "react-router-dom";

import { apps, user } from "@dash-incubator/dapp-sdk";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { CircularProgress, CssBaseline, Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";

import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";

import Uploader from "../features/Uploader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    width: theme.spacing(50),
    border: `1px solid ${theme.palette.primary.main}`,
  },
  margin: {
    margin: theme.spacing(1),
    width: "90%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  content: {
    color: "#1E266D",
    fontFamily: "Poppins",
    flexGrow: 1,
  },
  subcontent: {
    color: "#455880",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#008DE4",
  },
  iconButton: {
    padding: 10,
  },
  logo: {
    width: 190,
    height: 25,
  },
  uploadBox: {},
  verifyButton: {
    margin: theme.spacing(1),
    width: "110px",

    backgroundColor: "#FFFFFF",
    color: "#008DE4",
    height: 38,
    borderRadius: 0,
    fontSize: 11,
  },

  dashMidGrey: {
    color: "#7F8C98",
  },
  dashDarkGray: {
    color: "#787878",
  },
  dashBlack: {
    color: "#111921",
  },
  dashBlue: {
    color: "#008DE4",
  },
  disabled: {
    color: "A6A6A6",
  },
  dashWhite: {
    color: "white",
  },
}));

const UploadPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let initialized = false;

    const init = async () => {
      if (isInitialized) {
        return;
      }

      initialized = await user.session.start();

      if (initialized) {
        await apps.register();
        setIsInitialized(true);

        console.log("tDash founds, all relevant contract info cached");
      } else {
        console.log(
          `Deposit tDash in <b>${user.session.wallet.address}</b> to continue`
        );
        setTimeout(init, 1000 * 30);
      }
    };

    init();
  });
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CssBaseline>
      <div className={classes.root}>
        {!isInitialized ? (
          <CircularProgress />
        ) : (
          <div className="overlay">
            <Button variant="outlined" color="primary" onClick={handleToggle}>
              show uploader modal
            </Button>
            <Backdrop className={classes.backdrop} open={open}>
              <Grid
                item
                container
                justifyContent="center"
                xs={6}
                sm={6}
                md={8}
                lg={8}
              >
                <Paper elevation={1} square>
                  <Grid item>
                    <Uploader />
                  </Grid>
                </Paper>
              </Grid>
            </Backdrop>
          </div>
        )}
      </div>
    </CssBaseline>
  );
};
export default withRouter(UploadPage);
