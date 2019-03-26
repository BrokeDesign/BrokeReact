import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return(
        <header>{props.children}</header>
    );
}

export default Header;