import React from 'react';

const Modal = React.createClass({
  displayName: 'Modal',
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
    onClickOverlay: React.PropTypes.func.isRequired,
    opacity: React.PropTypes.number,
    visible: React.PropTypes.bool,
  },
  getDefaultProps() {
    return {
      className: 'Modal',
      visible: false,
      opacity: 0.5,
    };
  },
  getInitialState() {
    return {
      styles: this.getStyles(this.props.visible),
    };
  },
  componentWillReceiveProps(newProps) {
    if (newProps.visible !== this.props.visible) {
      this.setState({
        styles: this.getStyles(newProps.visible),
      });
    }
  },
  onClick(event) {
    if (event.target === this.refs.overlay.getDOMNode()) {
      this.props.onClickOverlay(event);
    }
  },
  getStyles(visible) {
    return {
      overlay: {
        background: `rgba(0,0,0,${this.props.opacity})`,
        bottom: 0,
        display: visible ? 'block' : 'none',
        left: 0,
        overflow: 'auto',
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1000,
      },
      modal: {
        background: 'white',
        left: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        zIndex: 1001,
      },
    };
  },
  render() {
    return (
      <div
        style={this.state.styles.overlay}
        onClick={this.onClick}
        ref="overlay">
        <div
          className={this.props.className}
          style={this.state.styles.modal}
          ref="modal">
          {this.props.children}
        </div>
      </div>
    );
  },
});

export default Modal;
