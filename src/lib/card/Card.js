import React from "react";
import PropTypes from "prop-types";

const Card = props => {
    return <div className={`card ${props.container}`}>{props.children}</div>;
};

Card.propTypes = {
    children: PropTypes.any,
    // If card should have container, value is card-container
    container: PropTypes.oneOf(["", "card-container"]),
};

Card.defaultProps = {
    children: "",
    container: "card-container"
};

export default Card;
