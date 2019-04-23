import React from 'react';
import PropTypes from 'prop-types';

//internal modules
import { Row } from '../../'

const Nav = (props) => {
    return (
        <div className={`nav nav-${props.bgColor}`}>
            {props.children}
        </div>
    )
}


Nav.propTypes = {
    children: PropTypes.any,
    bgColor: PropTypes.string,
}

Nav.defaultProps = {
    children: '',
    bgColor: 'alpha',
}

export default Nav;