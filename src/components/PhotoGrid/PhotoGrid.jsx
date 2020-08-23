import React from "react";
import PropTypes from "prop-types"
import Image from "../Photo";

function PhotoGrid({data}){



    return(
        <div>
            {data.photos.forEach(photo =>
                <Image data={photo}/>
            )}
        </div>
    )
}

export default PhotoGrid

PhotoGrid.propTypes = {
    data: PropTypes.shape({
        photos: PropTypes.array
    })
}