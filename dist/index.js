'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var Modal = _react2['default'].createClass({
  displayName: 'Modal',
  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    onClickOverlay: _react2['default'].PropTypes.func.isRequired,
    opacity: _react2['default'].PropTypes.number,
    visible: _react2['default'].PropTypes.bool,
    animation: _react2['default'].PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      className: 'Modal',
      opacity: 0.5
    };
  },
  getInitialState: function getInitialState() {
    return {
      styles: this.getStyles(),
      overlayVisible: this.props.visible,
      modalVisible: this.props.visible
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var _this = this;

    var visible = {};
    if (newProps.visible) {
      visible = {
        overlayVisible: true,
        modalVisible: true
      };
    } else {
      if (this.props.animation) {
        visible = {
          modalVisible: false
        };
        setTimeout(function () {
          _this.setState({
            overlayVisible: false
          });
        }, 300);
      } else {
        visible = {
          overlayVisible: false,
          modalVisible: false
        };
      }
    }
    this.setState(visible);
  },
  getStyles: function getStyles() {
    return {
      overlay: {
        background: 'rgba(0,0,0,' + this.props.opacity + ')',
        bottom: 0,
        display: 'block',
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
  renderModal: function renderModal() {
    if (this.state.modalVisible) {
      return _react2['default'].createElement(
        'div',
        { style: this.state.styles.modal, className: this.props.className, ref: 'modal', onClick: this.stopPropagation },
        this.props.children
      );
    }
    return null;
  },
  renderContentOverlay: function renderContentOverlay() {
    if (this.props.animation) {
      return _react2['default'].createElement(
        _reactAddonsCssTransitionGroup2['default'],
        {
          transitionAppear: true,
          transitionName: this.props.animation,
          component: 'div',
          style: this.state.styles.subWrapper,
          onClick: this.props.onClickOverlay,
          transitionAppearTimeout: 700,
          transitionEnterTimeout: 700,
          transitionLeaveTimeout: 700
        },
        this.renderModal()
      );
    }
    return _react2['default'].createElement(
      'div',
      {
        style: this.state.styles.subWrapper,
        onClick: this.props.onClickOverlay
      },
      this.renderModal()
    );
  },
  renderOverlay: function renderOverlay() {
    if (this.state.overlayVisible) {
      return _react2['default'].createElement(
        'div',
        { style: this.state.styles.overlay },
        _react2['default'].createElement(
          'div',
          { style: this.state.styles.wrapper },
          this.renderContentOverlay()
        )
      );
    }
    return null;
  },
  render: function render() {
    if (this.props.animation) {
      return _react2['default'].createElement(
        _reactAddonsCssTransitionGroup2['default'],
        {
          transitionName: 'fade',
          transitionAppear: true,
          component: 'div',
          transitionAppearTimeout: 700,
          transitionEnterTimeout: 700,
          transitionLeaveTimeout: 700
        },
        this.renderOverlay()
      );
    }
    return _react2['default'].createElement(
      'div',
      null,
      this.renderOverlay()
    );
  },
  stopPropagation: function stopPropagation(e) {
    e.stopPropagation();
  }
});

exports['default'] = Modal;
module.exports = exports['default'];