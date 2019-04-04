import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row } from '../../';


const NavBar = props => {
    // TODO: create sass map for nav with classes: navbar, nav, navfoot, nav-position-(top|side|side-right)
    // TODO: create scss mixin for nav map
    return (
    <div className={`navbar nav nav-position-${props.orient}`}>
		<Grid>
			{props.children}
		</Grid>
    </div>
    );
};

NavBar.propTypes = {
    /**
     * orientation of the navbar
     * side defaults to left - what I imagine is convention
     * side right goes right and top is the default, 
     * so no need to use prop if you intend to have a top navbar
     */
    orient: PropTypes.oneOf(['side', 'side-right', 'top']),
    /**
     * Just the children of the component, recommend using NavItem,
     * since everything is in Grid (which is just a container), you should either use
     * row and columns with what you want or you can simply use the Nav components.
     * TODO: Create remaining Nav Components
     */
    children: PropTypes.any, 
};

NavBar.defaultProps = {
    orient: 'top',
	children: '',
};

export default NavBar;
