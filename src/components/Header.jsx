
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import DashHeaderLogo from "../assets/DashHeaderLogo.png"
import { ThemeProvider, createTheme } from "@mui/material";

const headerTheme = createTheme({
    palette: {
      primary: {
        main: "#008DE4",
      },
    },
  });


const Header = () => {
    return (
        <ThemeProvider theme={headerTheme}>
        <AppBar elevation="0" color="primary" position="static">
          <Toolbar>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              <IconButton color="inherit">
                    <img src={DashHeaderLogo} alt="Logo" />
                </IconButton>
            </Typography>
                <Button color="inherit"> Catalog </Button>
                <Button color="inherit"> Users </Button>
                <Button color="inherit"> Log in </Button>
          </Toolbar>
        </AppBar>
        </ThemeProvider>
        
    );
}

export default Header