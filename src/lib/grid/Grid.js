import React from 'react';
import PropTypes from 'prop-types';

const Grid = (props) => {
    return(
        <div className="container">{props.children}</div>
    );
}

export default Grid;