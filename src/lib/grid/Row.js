import React from 'react';
import PropTypes from 'prop-types';

const Row = (props) => {
    return(
        <div className={`row ${props.border}`} >{props.children}</div>
    );
}

Row.propTypes = {
    border: PropTypes.oneOf(["", "outline"]),
    children: PropTypes.any,
}

Row.defaultProps = {
    border: "",
    children: "",
}

export default Row;