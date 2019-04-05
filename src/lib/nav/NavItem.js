import React from 'react';
import PropTypes from 'prop-types';

//internal modules
import { Col } from '../../';

const NavItem = (props) => {
    return (
        <div className={`nav-${type} ${color}`}>
            {props.children}
        </div>
    )
}

export default NavItem;