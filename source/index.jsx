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
        overflowY: 'auto',
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1000,
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
        width: '100%',
      },
      subWrapper: {
        display: 'table-cell',
        verticalAlign: 'middle',
      },
      modal: {
        background: 'white',
        margin: '0 auto',
      },
    };
  },
  render() {
    return (
      <div style={this.state.styles.overlay}>
        <div style={this.state.styles.wrapper}>
          <div style={this.state.styles.subWrapper} onClick={this.onClick} ref="overlay">
            <div style={this.state.styles.modal} className={this.props.className} ref="modal">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default Modal;
