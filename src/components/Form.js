import React from 'react';

export default class Form extends React.Component {
    onFormSubmit(e) {
      e.preventDefault();
    }
  
    render() {
      return (
        <div className="container">
          <form className="form" onSubmit={this.onFormSubmit}>
            <label className="label">Number 1: </label>
            <input className="form-input" type="text" name="valone" id="val1" required />
            <br />
            <label className="label">Number 2: </label>
            <input className="form-input" type="text" name="valtwo" id="val2" required/>
        </form>
        </div>
      )
    }
}