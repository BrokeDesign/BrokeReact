import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
    return(
        <div className="wrapper">
            {props.children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.any,
}

Container.defaultProps = {
    children: "",
}

export default Container;