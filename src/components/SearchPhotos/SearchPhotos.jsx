import React, {useCallback, useEffect } from "react";
import {makeStyles} from "@material-ui/styles";
import TablePagination from "@material-ui/core/TablePagination";
import {PhotosGrid} from "../PhotosGrid/PhotosGrid";
import TextField from "@material-ui/core/TextField";
import { debounce } from 'lodash';

function SearchPhotos
({
     // From Store
     fetchPhotos,
     getTotalElements,
     getPage,
     getElementsPerPage,
     getSearchTerm,

     // Dispatch
     photosList,
     setPage,
     setPerPage,
     setSearchTerm
 })
{
    const useStyles = makeStyles(() => (
        {
            wrapper: {
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
            }
        }
    ))

    const classes = useStyles();

    const fetchPhotosDebounced = useCallback(debounce(fetchPhotos, 400), [])

    useEffect(() => {
        fetchPhotosDebounced()
    }, [fetchPhotos, getPage, getElementsPerPage, getSearchTerm, fetchPhotosDebounced])

    const setPageCallback = useCallback((page) => {
        setPage(page)
    }, [setPage])

    const setPerPageCallback = useCallback((pageSize) => {
        setPerPage(pageSize)
    }, [setPerPage])
    
    const setSearchTermCallback = useCallback((searchTerm) => {
        setSearchTerm(searchTerm)
    }, [setSearchTerm])

    const PaginationComponent = () =>
        <TablePagination
            component="div"
            count={getTotalElements ? getTotalElements : 0}
            page={getPage ? getPage : 0}
            onChangePage={(e, page) => setPageCallback(page)}
            rowsPerPage={getElementsPerPage ? getElementsPerPage : 0}
            onChangeRowsPerPage={(e, x) => setPerPageCallback(x.props.value)}
        />;

    return (
        <div className={classes.wrapper}>
            <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue={getSearchTerm}
                helperText="Search Flickr for some awesome photos"
                variant="outlined"
                onChange={(event) => setSearchTermCallback(event.target.value)}
            />
            <PaginationComponent/>
            <PhotosGrid photosList={photosList}/>
            <PaginationComponent/>
        </div>
    )
}

export default SearchPhotos;