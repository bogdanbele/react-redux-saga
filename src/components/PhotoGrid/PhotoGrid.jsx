import React, {useCallback, useEffect} from "react";
import PropTypes from "prop-types"
import Photo from "../Photo/Photo";
import {makeStyles} from "@material-ui/styles";

function PhotoGrid
({
     fetchPhotos,
     photosList
 }) {

    const useStyles = makeStyles(() => ({
        photoGrid: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        wrapper: {
            flexDirection: 'column',
            backgroundColor: '#3e3e3e',
            display: 'flex',
        }
    }))

    const classes = useStyles();

    const fetchPhotosCallback = useCallback(() => {
        fetchPhotos()
    }, [fetchPhotos])

    useEffect(() => {
        fetchPhotos()
    }, [fetchPhotos])

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <button onClick={() => fetchPhotosCallback()}> CLICK HERE</button>
                <div className={classes.photoGrid}>
                    {photosList.map((photo, index) => {
                            console.log(photo)
                            return <Photo
                                key={index}
                                ownerName={photo.ownername}
                                title={photo.title ? photo.title : 'No Title'}
                                imageUrl={photo.url_n}/>
                        }
                    )}
                </div>
            </div>
        </React.Fragment>

    )
}

export default PhotoGrid

PhotoGrid.propTypes = {
    data: PropTypes.shape({
        photos: PropTypes.array
    })
}