import React from 'react';

const ActionMult = (props) => (
    <div className="container">
      <button className="button" onClick={props.handleMult}>Multiply</button>
    </div>
);

export default ActionMult;