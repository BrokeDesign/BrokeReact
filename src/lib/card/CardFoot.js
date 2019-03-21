import React from "react";
import PropTypes from "prop-types";

const CardFoot = props => {
    return <div className={`card-foot`}>{props.children}</div>;
};

CardFoot.propTypes = {
    children: PropTypes.any
};

CardFoot.defaultProps = {
    children: ""
};

export default CardFoot;
