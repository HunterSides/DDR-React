
import { useState } from "react";
import { styled } from '@mui/material/styles';
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
import UploadButton from "../assets/UploadButton.svg"
import SearchSVG from "../assets/magnifyingglass.svg"
import ProfileButton from "../assets/ProfileButton.svg"

const headerTheme = createTheme({
    palette: {
      primary: {
        main: "#008DE4",
      },
    },
  });
  const StyledAppbar = styled(AppBar) (({ theme }) => ({
    fontFamily: 'MPLUS 1p Bold',

  }));
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    
  }));
  const StyledButton = styled(Button) (({ theme }) => ({
    border: 'none',
    backgroundColor: 'inherit',
    textTransform: 'none',
    fontFamily: "M PLUS 1p Bold",
    fontStyle: 'normal',
    fontSize: '24px',
    color: '#FFFFFF',
    paddingTop: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',

    '&:hover, &:active, &:focus': {
    textDecoration: 'underline',
    textUnderlineOffset: '20%'
    }
  }));
  const SearchContainer = styled('div')(({ theme }) => ({
    flexGrow: 0.85,
    paddingTop: '20px',
    paddingBottom: '9px'
  }));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: 'rgba(250, 250, 250, 0.93)',
    width: '250px',
    height: '36px',
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    paddingLeft: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      padding: theme.spacing(1.25, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    },
    'input': {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        fontFamily: "M PLUS 1p Bold",
        fontWeight: 700,
        fontStyle: 'normal',
        opacity: 1,
        letterSpacing: '-0.408px',
        lineHeight: '22px',
        fontSize: '17px',
        color: "rgba(60, 60, 67, 0.6)",
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
      <>
        <ThemeProvider theme={headerTheme}>
        <StyledAppbar sx={{height: 65 }}elevation="0" color="primary" position="static">
          <StyledToolbar>
              <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                <IconButton color="inherit">
                    <img src={DashHeaderLogo} alt="Logo" />
                </IconButton>
              </Typography>
            <SearchContainer >
              <Search>
                <SearchIconWrapper>
                  <img src={SearchSVG} alt="Search" />
                  
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </SearchContainer>
              <StyledButton >
                Catalog
              </StyledButton>
              <StyledButton >
                Users
              </StyledButton>
              { 
              /*<IconButton onClick={() => navigate("/upload")}>
                  <img src={UploadButton} alt="Upload" />
              </IconButton>*/
              }
              <IconButton >
                  <img src={ProfileButton} alt="Profile" />
              </IconButton>
              <StyledButton >
                Log in
              </StyledButton>
          </StyledToolbar>
        </StyledAppbar>
        </ThemeProvider>
        <style jsx>{`
          .menu-button {
            border: none;
            background-color: inherit;
            font-family: "M PLUS 1p Bold"
            font-style: normal;
            font-size: 24px;
            color: #FFFFFF;
            padding-left: 10px;
            padding-right: 10px;
          }
          .login-button-focus {
            border: none;
            background-color: inherit;
            font-family: "M PLUS 1p Bold"
            font-style: normal;
            font-size: 24px;
            color: #FFFFFF;
            text-decoration: underline;
            text-underline-offset: 20%;
            padding-left: 10px;
            padding-right: 10px;
          }
        `}</style>
      </>
        
    );
}

export default Header