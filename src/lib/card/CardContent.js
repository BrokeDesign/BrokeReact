import React from "react";
import PropTypes from "prop-types";

const CardContent = props => {
    return <div className={`card-content`}>{props.children}</div>;
};

CardContent.propTypes = {
    children: PropTypes.any
};

CardContent.defaultProps = {
    children: ""
};

export default CardContent;
