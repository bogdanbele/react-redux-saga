import Paper from "@material-ui/core/Paper";
import Photo from "../Photo/Photo";
import React from "react";
import {makeStyles} from "@material-ui/styles";


export function PhotosGrid({
                               photosList
                           })
{

    const useStyles = makeStyles(() => (
        {
            photoGrid: {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: 925,
                minHeight: '90vh',
                padding: 30,

            },
            wrapper: {
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
            },
            button: {
                position: 'absolute',
                top: 80,
                right: 80,
            }
        }
    ))

    const classes = useStyles();

    const fallbackImageUrl = 'https://previews.123rf.com/images/grgroup/grgroup1904/grgroup190403353/124023971-oops-comic-words-in-speech-bubble-isolated-icon-vector-illustration-design.jpg';

    return (
        <Paper className={classes.photoGrid}>
            {photosList.map((photo, index) => {
                    return <Photo
                        key={index}
                        ownerName={photo.ownername ? photo.ownername : 'Name not available'}
                        title={photo.title ? photo.title : 'No Title'}
                        imageUrl={photo.url_n ? photo.url_n : fallbackImageUrl}/>
                }
            )}

        </Paper>
    )
}