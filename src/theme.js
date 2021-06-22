import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0652DD",
    },
    secondary: {
      main: "#009432", 
      light:"#ff6b81",
    },
    gray:{
       main: "#747d8c",
       light: "#ced6e0",
    },
    base:{
      main:'#ffffff'
    }
  },
  typography: {
    fontFamily: ["sans-serif"],
    button:{
      textTransform: "none"
    }
  },

});

export default theme