import React from 'react';

const Space = (props) => (
    <div style={{paddingLeft: props.left, paddingRight: props.right, paddingTop: props.top, paddingBottom: props.bottom, margin: props.margin}}/>
);

export default Space;