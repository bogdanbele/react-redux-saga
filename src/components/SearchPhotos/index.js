import {connect} from "react-redux"
import {setPerPage, setPage} from "../../state/photos/searchPhotosPagination/actionCreators";
import {fetchPhotos, setSearchTerm} from "../../state/photos/searchPhotos/actionCreators";
import {getPhotosList, getSearchTerm} from "../../state/photos/searchPhotos/selectors";
import {getPage, getElementsPerPage, getTotalElements} from "../../state/photos/searchPhotosPagination/selectors";
import SearchPhotos from "./SearchPhotos";

const mapStateToProps = (state) => ({
    photosList: getPhotosList(state),
    getTotalElements: getTotalElements(state),
    getPage: getPage(state),
    getElementsPerPage: getElementsPerPage(state),
    getSearchTerm: getSearchTerm(state)
})

const mapDispatchToProps = {
    setPage,
    setPerPage,
    fetchPhotos,
    setSearchTerm,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPhotos)