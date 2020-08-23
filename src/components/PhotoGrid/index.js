import {connect} from 'react-redux';
import PhotoGrid from "./PhotoGrid";
import * as selectors from "../../state/photos/pagination/selectors"
import {
    setPagination,
    setTotalElements,
    setPerPage,
    setTotalPages,
    setPage,
} from '../../state/photos/pagination/actionCreators'
import {fetchPhotos} from "../../state/photos/list/actionCreators";
import {getPhotosList} from "../../state/photos/list/selectors";

const mapStateToProps = (state) => ({
    photosList: getPhotosList(state)
})

const mapDispatchToProps = {
    setPage,
    setPerPage,
    fetchPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid)