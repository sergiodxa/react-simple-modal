'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var CSSTransitionGroup = _reactAddons2['default'].addons.CSSTransitionGroup;

var Modal = _reactAddons2['default'].createClass({
  displayName: 'Modal',
  propTypes: {
    className: _reactAddons2['default'].PropTypes.string,
    children: _reactAddons2['default'].PropTypes.node.isRequired,
    onClickOverlay: _reactAddons2['default'].PropTypes.func.isRequired,
    opacity: _reactAddons2['default'].PropTypes.number,
    visible: _reactAddons2['default'].PropTypes.bool,
    animation: _reactAddons2['default'].PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      className: 'Modal',
      opacity: 0.5
    };
  },
  getInitialState: function getInitialState() {
    return {
      styles: this.getStyles()
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
  onClick: function onClick(event) {
    if (event.target === this.refs.overlay.getDOMNode()) {
      this.props.onClickOverlay(event);
    }
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
      return _reactAddons2['default'].createElement(
        'div',
        { style: this.state.styles.modal, className: this.props.className, ref: 'modal' },
        this.props.children
      );
    }
    return null;
  },
  renderContentOverlay: function renderContentOverlay() {
    if (this.props.animation) {
      return _reactAddons2['default'].createElement(
        CSSTransitionGroup,
        {
          transitionAppear: true,
          transitionName: this.props.animation,
          component: 'div',
          style: this.state.styles.subWrapper,
          onClick: this.onClick,
          ref: 'overlay'
        },
        this.renderModal()
      );
    }
    return _reactAddons2['default'].createElement(
      'div',
      {
        style: this.state.styles.subWrapper,
        onClick: this.onClick,
        ref: 'overlay'
      },
      this.renderModal()
    );
  },
  renderOverlay: function renderOverlay() {
    if (this.state.overlayVisible) {
      return _reactAddons2['default'].createElement(
        'div',
        { style: this.state.styles.overlay },
        _reactAddons2['default'].createElement(
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
      return _reactAddons2['default'].createElement(
        CSSTransitionGroup,
        { transitionName: 'fade', transitionAppear: true, component: 'div' },
        this.renderOverlay()
      );
    }
    return _reactAddons2['default'].createElement(
      'div',
      null,
      this.renderOverlay()
    );
  }
});

exports['default'] = Modal;
module.exports = exports['default'];