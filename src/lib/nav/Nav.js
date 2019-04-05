import React from 'react';
import PropTypes from 'prop-types';

//internal modules
import { Row } from '../../'

const Nav = (props) => {
    return (
        <Row className='nav'>
            {props.children}
        </Row>
    )    
}


Nav.propTypes = {
    children: PropTypes.any,
}

Nav.defaultProps = {
    children: '',
}

export default Nav;