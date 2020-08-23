import React, {useState} from 'react';
import './App.css';
import RecentPhotos from "../RecentPhotos";
import Header from "../Header/Header";
import {createMuiTheme} from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import {ThemeProvider} from "@material-ui/styles";
import {blue} from "@material-ui/core/colors";
import SearchPhotos from "../SearchPhotos";

function App() {

    const [mode, setMode] = useState('getRecent')
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header
                    changeMode={() => setMode(mode === 'getRecent' ? 'search' : 'getRecent')}
                    mode={mode}/>
                {
                    (mode === 'getRecent') ? <RecentPhotos/> : <SearchPhotos/>
                }
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
