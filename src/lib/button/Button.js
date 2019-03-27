import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return(
        <div type="button" className={`btn btn-${props.bgColor}`}>
            <span className={`text-${props.textColor}`}>{props.children}</span>
        </div>
    )
}

Button.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
}

Button.defaultProps = {
    bgColor: "alpha",
    textColor: "alpha-contrast",
}

export default Button;