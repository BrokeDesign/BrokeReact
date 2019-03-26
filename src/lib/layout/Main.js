import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
    return(
        <main className="container">{props.children}</main>
    );
}

export default Main;