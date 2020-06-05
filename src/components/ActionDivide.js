import React from 'react';

const ActionDivide = (props) => (
    <div className="container">
      <button className="button" onClick={props.handleDivide}>Divide</button>
    </div>
);

export default ActionDivide;