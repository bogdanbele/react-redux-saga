import {connect} from "react-redux";
import RecentPhotos from "./RecentPhotos";
import {
    setPerPage,
    setPage,
} from '../../state/photos/recentPhotosPagination/actionCreators'
import {fetchPhotos} from "../../state/photos/recentPhotos/actionCreators";
import {getPhotosList} from "../../state/photos/recentPhotos/selectors";
import {getPage, getElementsPerPage, getTotalElements} from "../../state/photos/recentPhotosPagination/selectors"

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

export default connect(mapStateToProps, mapDispatchToProps)(RecentPhotos)