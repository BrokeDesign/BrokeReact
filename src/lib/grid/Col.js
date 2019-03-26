import React from "react";
import PropTypes from "prop-types";

const Col = props => {
    return <div className={`col-${props.colSize} ${props.offset} ${props.outline}`}>{props.children}</div>;
};

Col.propTypes = {
    //TODO: Set up dynamic proptype for offset.
    children: PropTypes.any,
    /** colSize
     *  @description Column width, number provided makes column take x/12 frames width in row.
     * Acceptable values:
     *      integer 1-12
     */
    colSize: PropTypes.oneOf(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]),

    /** OffSet
     *  @description Column offset, number provided offsets column that many frames forward.
     * Acceptable values:
     *      col-offset-<int>
     */
    offset: PropTypes.string,

    outline: PropTypes.oneOf(["", "outline"])
};

Col.defaultProps = {
    children: "",
    colSize: "12",
    offset: "",
    outline: ""
};

export default Col;
