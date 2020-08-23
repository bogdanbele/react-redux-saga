import React from "react";
import PropTypes from "prop-types";

function Image({data}) {
    return (
        <div>
            {data}
        </div>
    )
}

Image.propTypes = {
    data: PropTypes.shape({})
}

export default Image