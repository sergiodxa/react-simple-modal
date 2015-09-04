'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Modal = _react2['default'].createClass({
  displayName: 'Modal',
  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    onClickOverlay: _react2['default'].PropTypes.func.isRequired,
    opacity: _react2['default'].PropTypes.number,
    visible: _react2['default'].PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      className: 'Modal',
      visible: false,
      opacity: 0.5
    };
  },
  getInitialState: function getInitialState() {
    return {
      styles: this.getStyles(this.props.visible)
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (newProps.visible !== this.props.visible) {
      this.setState({
        styles: this.getStyles(newProps.visible)
      });
    }
  },
  onClick: function onClick(event) {
    if (event.target === this.refs.overlay.getDOMNode()) {
      this.props.onClickOverlay(event);
    }
  },
  getStyles: function getStyles(visible) {
    return {
      overlay: {
        background: 'rgba(0,0,0,' + this.props.opacity + ')',
        bottom: 0,
        display: visible ? 'block' : 'none',
        left: 0,
        overflowY: 'auto',
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1000
      },
      wrapper: {
        bottom: 0,
        boxSizing: 'border-box',
        display: 'table',
        height: '100%',
        left: 0,
        position: 'absolute',
        right: 0,
        textAlign: 'center',
        top: 0,
        width: '100%'
      },
      subWrapper: {
        display: 'table-cell',
        verticalAlign: 'middle'
      },
      modal: {
        background: 'white',
        margin: '0 auto'
      }
    };
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { style: this.state.styles.overlay },
      _react2['default'].createElement(
        'div',
        { style: this.state.styles.wrapper },
        _react2['default'].createElement(
          'div',
          { style: this.state.subWrapper, onClick: this.props.onClickOverlay, ref: 'overlay' },
          _react2['default'].createElement(
            'div',
            { style: this.state.styles.modal, className: this.props.className, ref: 'modal' },
            this.props.children
          )
        )
      )
    );
  }
});

exports['default'] = Modal;
module.exports = exports['default'];