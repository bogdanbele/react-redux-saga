import React from 'react';
import './App.css';
import PhotoGrid from "../PhotoGrid";
import Header from "../Header/Header";
import {createMuiTheme} from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import {ThemeProvider} from "@material-ui/styles";
import {blue} from "@material-ui/core/colors";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header/>
                <PhotoGrid/>
            </div>
        </ThemeProvider>
    );
}

const theme = createMuiTheme({
    palette: {
        primary:{
            main: orange[500]
        },
        secondary:{
            main: blue[500],
        }
    }
});

export default App;
