'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log('running');

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handelPick = _this.handelPick.bind(_this);
    _this.handelAddOption = _this.handelAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

    // default state
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //this will check if the json data in the local storage is bad
      try {
        // console.log('fetching data');
        // if there is data in local storage grab it
        var json = localStorage.getItem('options');
        // console.log(json);
        //parse to an array
        var options = JSON.parse(json);
        // console.log(options);
        // only if there are options update state
        if (options) {
          // update the state with the localStorage data
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        //dont do any thing just go with default value of state.options
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // console.log(prevState, prevProps);
      // if copy of state same as exsiting state
      if (prevState.options.length !== this.state.options.length) {
        console.log('saving data');
        var json = JSON.stringify(this.state.options);
        //add to local storage
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('unmonted');
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      // console.log('hdo', optionToRemove);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      // console.log(`before Options = ${this.state.options}`)
      // this.setState(() => {
      //   return {
      //     options: []
      //   }
      // })
      // console.log(`after Options = ${this.state.options}`)

      //returns object by default but must be wraped in ()
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handelPick',
    value: function handelPick() {
      // multiply by length of array
      // Math.floor rounds of the random number to a whole number
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var chossenOption = this.state.options[randomNum];
      alert(chossenOption);
    }
  }, {
    key: 'handelAddOption',
    value: function handelAddOption(option) {
      // console.log(option);
      // validation must have at least on character
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        //check if option is already in array if the value is more that -1 it is (arrays are 0 based)
        return 'This option already exists';
      }
      // only gets call if the if above does not return its like another else
      //prevState is just a randome name for the data passed in
      // this.setState((prevState) => {
      //   return {
      //     //use concat to add the option to the prevState array
      //     options: prevState.options.concat([option])

      //   };
      // });

      this.setState(function (prevState) {
        return { options: prevState.options.concat([option]) };
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var subTitle = "Put your life in the hands of a computer";
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subTitle: subTitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handelPick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handelAddOption: this.handelAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

// convert head to functional stateless component
// class Header extends React.Component {
//   render() {
//     console.log(this.props.title);
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//       </div>
//     );
//   }
// }


var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'TEST'
    ),
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle,
    React.createElement(
      'h2',
      null,
      props.subTitle
    )
  );
};
Header.defaultProps = {
  title: 'Indecision App'
};

// stateless functional component

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What should I do????'
    )
  );
};

// class version
// class Action extends React.Component {

//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick} 
//         disabled={!this.props.hasOptions}
//         >What should I do????</button>
//       </div>
//     );
//   }
// }

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option to get started'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'remove X'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  //set the consrutoer here lets us use this
  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handelAddOption = _this2.handelAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handelAddOption',
    value: function handelAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      // alert(`= ${option} state = ${this.state.error}`);
      // this passes to parent coponent
      var error = this.props.handelAddOption(option);
      // this.setState(() => {
      //   //the const above
      //   return {
      //     error: error
      //   };
      //   // alert(`= ${option} state = ${this.state.error}`);
      // });

      this.setState(function () {
        return { error: error };
      });

      //if there is no error clear the input
      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handelAddOption },
          React.createElement(
            'label',
            { htmlFor: 'option' },
            'Enter Option to list'
          ),
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            { type: 'submit' },
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
