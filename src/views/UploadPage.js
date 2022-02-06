import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect, useHistory, withRouter } from "react-router-dom";
//imports

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { CssBaseline, Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { DropzoneAreaBase } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import init from "../services/init";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

function UploadPage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CssBaseline>
      <div className={classes.root}>
        <div className="overlay">
          <Button variant="outlined" color="primary" onClick={handleToggle}>
            upload files
          </Button>
          <Backdrop
            className={classes.backdrop}
            open={open}
            onClick={handleClose}
          >
            <Grid item container justify="center" xs={6} sm={6} md={8} lg={8}>
              <Paper className={classes.paper} elevation={1} square>
                <Grid item>
                  <DropzoneAreaBase
                    onChange={(files) => console.log("Files:", files)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    className={classes.verifyButton}
                    variant="contained"
                    disableElevation
                    type="submit"
                  >
                    Upload
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Backdrop>
        </div>
      </div>
    </CssBaseline>
  );
}
export default withRouter(UploadPage);
