import React, {useCallback, useEffect, useMemo} from "react";
import PropTypes from "prop-types"
import Photo from "../Photo/Photo";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

function PhotoGrid
({
    // From Store
     fetchPhotos,
     getTotalElements,
     getPage,
     getElementsPerPage,

    // Dispatch
     photosList,
     setPage,
     setPerPage
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

    const fetchPhotosCallback = useCallback(() => {
        fetchPhotos()
    }, [fetchPhotos])


    useEffect(() => {
        fetchPhotos();
    }, [fetchPhotos, getPage, getElementsPerPage])

    const setPageCallback = useCallback((page) => {
        setPage(page)
    }, [setPage])

    const setPerPageCallback = useCallback((pageSize) => {
        setPerPage(pageSize)
    },[setPerPage])

    const fallbackImageUrl = 'https://previews.123rf.com/images/grgroup/grgroup1904/grgroup190403353/124023971-oops-comic-words-in-speech-bubble-isolated-icon-vector-illustration-design.jpg';
    
    const PaginationComponent = () =>
        <TablePagination
            component="div"
            count={getTotalElements ?  getTotalElements : 0}
            page={getPage ? getPage : 0}
            onChangePage={(e, page) => setPageCallback(page)}
            rowsPerPage={getElementsPerPage ? getElementsPerPage : 0}
            onChangeRowsPerPage={(e, x) => setPerPageCallback(x.props.value)}
        />;
    
    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <PaginationComponent/>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    onClick={() => fetchPhotosCallback()}> FETCH NEW IMAGES</Button>
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
                <PaginationComponent/>
            </div>
        </React.Fragment>

    )
}

export default PhotoGrid

PhotoGrid.propTypes = {
    data: PropTypes.shape({
        photos: PropTypes.array,
    })
}
