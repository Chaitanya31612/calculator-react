'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculation = function (_React$Component) {
  _inherits(Calculation, _React$Component);

  function Calculation() {
    _classCallCheck(this, Calculation);

    return _possibleConstructorReturn(this, (Calculation.__proto__ || Object.getPrototypeOf(Calculation)).apply(this, arguments));
  }

  _createClass(Calculation, [{
    key: 'handleAdd',
    value: function handleAdd() {
      var numone = parseInt(document.getElementById('val1').value);
      var numtwo = parseInt(document.getElementById('val2').value);

      alert(numone + numtwo);
    }
  }, {
    key: 'handleSubstract',
    value: function handleSubstract() {
      var numone = parseInt(document.getElementById('val1').value);
      var numtwo = parseInt(document.getElementById('val2').value);

      alert(numone - numtwo);
    }
  }, {
    key: 'handleMult',
    value: function handleMult() {
      var numone = parseInt(document.getElementById('val1').value);
      var numtwo = parseInt(document.getElementById('val2').value);

      alert(numone * numtwo);
    }
  }, {
    key: 'handleDivide',
    value: function handleDivide() {
      var numone = parseInt(document.getElementById('val1').value);
      var numtwo = parseInt(document.getElementById('val2').value);

      alert(numone / numtwo);
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      document.getElementById('val1').value = '';
      document.getElementById('val2').value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Form, null),
        React.createElement(ActionAdd, { handleAdd: this.handleAdd }),
        React.createElement(ActionSubstract, { handleSubstract: this.handleSubstract }),
        React.createElement(ActionMult, { handleMult: this.handleMult }),
        React.createElement(ActionDivide, { handleDivide: this.handleDivide }),
        React.createElement(ActionClear, { handleClear: this.handleClear })
      );
    }
  }]);

  return Calculation;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Calculation Application'
        ),
        React.createElement(
          'h2',
          null,
          'Put your calculations in the hands of computer'
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Form = function (_React$Component3) {
  _inherits(Form, _React$Component3);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'onFormSubmit',
    value: function onFormSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.onFormSubmit },
          React.createElement(
            'label',
            null,
            'Number 1: '
          ),
          React.createElement('input', { type: 'text', name: 'valone', id: 'val1', required: true }),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            'Number 2: '
          ),
          React.createElement('input', { type: 'text', name: 'valtwo', id: 'val2', required: true })
        )
      );
    }
  }]);

  return Form;
}(React.Component);

var ActionAdd = function ActionAdd(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleAdd },
      'Add'
    )
  );
};

var ActionSubstract = function ActionSubstract(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleSubstract },
      'Substract'
    )
  );
};

var ActionMult = function ActionMult(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleMult },
      'Multiply'
    )
  );
};

var ActionDivide = function ActionDivide(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDivide },
      'Divide'
    )
  );
};

var ActionClear = function ActionClear(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleClear },
      'Clear'
    )
  );
};

ReactDOM.render(React.createElement(Calculation, null), document.getElementById('app'));
