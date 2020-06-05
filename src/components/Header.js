import React from 'react';

export default class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <div className="container">
          <h1 className="header__title">Calculation Application</h1>
          <h3 className="header__subtitle">Put your calculations in the hands of computer</h3>
          </div>
        </div>
      )
    }
}  