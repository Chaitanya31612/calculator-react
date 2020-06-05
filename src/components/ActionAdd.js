import React from 'react';

const ActionAdd = (props) => (
    <div className="container">
  <button className="button" onClick={props.handleAdd}>Add</button>
    </div>
);

export default ActionAdd;