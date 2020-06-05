import React from 'react';

const ActionClear = (props) => (
    <div className="container">
      <button className="button" onClick={props.handleClear}>Clear</button>
    </div>
)

export default ActionClear;