import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1,
            marginBottom: 90,
        },
        title: {
            flexGrow: 1,
        },
    }
));

export default function Header({changeMode, mode}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        { (mode === 'getRecent' ? <p>Latest Flickr Pictures</p> : <p>Search</p> )}
                    </Typography>
                    <Button color="inherit" onClick={() => changeMode()}>Change Mode</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}