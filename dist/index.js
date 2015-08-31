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
        overflow: 'auto',
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1000
      },
      modal: {
        background: 'white',
        left: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        zIndex: 1001
      }
    };
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      {
        style: this.state.styles.overlay,
        onClick: this.onClick,
        ref: 'overlay' },
      _react2['default'].createElement(
        'div',
        {
          className: this.props.className,
          style: this.state.styles.modal,
          ref: 'modal' },
        this.props.children
      )
    );
  }
});

exports['default'] = Modal;
module.exports = exports['default'];