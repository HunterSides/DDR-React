
import { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import { ThemeProvider, createTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputBase from '@mui/material/InputBase';
import DashHeaderLogo from "../assets/DashHeaderLogo.png"


const headerTheme = createTheme({
    palette: {
      primary: {
        main: "#008DE4",
        fontFamily: 'Mplus 1p Bold'
      },
    },
  });
  const SearchContainer = styled('div')(({ theme }) => ({
    flexGrow: 0.85
  }));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: 'rgba(250, 250, 250, 0.93)',
    width: 225,
    height: 36,

  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0,1,0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
    'input': {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'rgba(60, 60, 67)',
        fontSize: '17px'

      }
    },

  }));

  const data = [
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Berlin",
  "Buenos Aires",
  "Cairo",
  "Canberra",
  "Rio de Janeiro",
  "Dublin"
  ];
  const SearchBar = ({setSearchQuery}) => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="search"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );
      
  const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
  };
    
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

    return (
        <ThemeProvider theme={headerTheme}>
        <AppBar elevation="0" color="primary" position="static">
          <Toolbar>
              <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                <IconButton color="inherit">
                    <img src={DashHeaderLogo} alt="Logo" />
                </IconButton>
              </Typography>
            <SearchContainer >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{fontSize: "25px", color: "#999999"}}/>
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </SearchContainer>
                <Button color="inherit"> Catalog </Button>
                <Button color="inherit"> Users </Button>
                <Button color="inherit"> Log in </Button>
          </Toolbar>
        </AppBar>
        </ThemeProvider>
        
    );
}

export default Header