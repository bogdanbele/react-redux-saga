import React, {useCallback, useEffect} from "react";
import PropTypes from "prop-types"
import {makeStyles} from "@material-ui/styles";
import TablePagination from "@material-ui/core/TablePagination";
import {PhotosGrid} from "../PhotosGrid/PhotosGrid";

function RecentPhotos
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
            wrapper: {
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
            }
        }
    ))

    const classes = useStyles();

    useEffect(() => {
        fetchPhotos();
    }, [fetchPhotos, getPage, getElementsPerPage])

    const setPageCallback = useCallback((page) => {
        setPage(page)
    }, [setPage])

    const setPerPageCallback = useCallback((pageSize) => {
        setPerPage(pageSize)
    },[setPerPage])


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
            <div className={classes.wrapper}>
                <PaginationComponent/>
                    <PhotosGrid photosList={photosList}/>
                <PaginationComponent/>
            </div>
    )
}

export default RecentPhotos;

RecentPhotos.propTypes = {
    data: PropTypes.shape({
        photos: PropTypes.array,
    })
}
