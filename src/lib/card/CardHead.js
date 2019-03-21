import React from "react";
import PropTypes from "prop-types";

const CardHead = props => {
    return <div className={`card-head`}>{props.children}</div>;
};

CardHead.propTypes = {
    children: PropTypes.any
};

CardHead.defaultProps = {
    children: ""
};

export default CardHead;
