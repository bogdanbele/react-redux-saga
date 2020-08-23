import {connect} from 'react-redux';
import PhotoGrid from "./PhotoGrid";
import {
    setPerPage,
    setPage,
} from '../../state/photos/pagination/actionCreators'
import {fetchPhotos} from "../../state/photos/list/actionCreators";
import {getPhotosList} from "../../state/photos/list/selectors";
import {getPage, getElementsPerPage, getTotalElements} from "../../state/photos/pagination/selectors"

const mapStateToProps = (state) => ({
    photosList: getPhotosList(state),
    getTotalElements: getTotalElements(state),
    getPage: getPage(state),
    getElementsPerPage: getElementsPerPage(state)
})

const mapDispatchToProps = {
    setPage,
    setPerPage,
    fetchPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid)