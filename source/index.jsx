import React from 'react/addons';
const {CSSTransitionGroup} = React.addons;

const Modal = React.createClass({
  displayName: 'Modal',
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
    onClickOverlay: React.PropTypes.func.isRequired,
    opacity: React.PropTypes.number,
    visible: React.PropTypes.bool,
    animation: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      className: 'Modal',
      opacity: 0.5,
    };
  },
  getInitialState() {
    return {
      styles: this.getStyles(),
    };
  },
  componentWillReceiveProps(newProps) {
    let visible = {};
    if (newProps.visible) {
      visible = {
        overlayVisible: true,
        modalVisible: true,
      };
    } else {
      if (this.props.animation) {
        visible = {
          modalVisible: false,
        };
        setTimeout(()=> {
          this.setState({
            overlayVisible: false,
          });
        }, 300);
      } else {
        visible = {
          overlayVisible: false,
          modalVisible: false,
        };
      }
    }
    this.setState(visible);
  },
  onClick(event) {
    if (event.target === this.refs.overlay.getDOMNode()) {
      this.props.onClickOverlay(event);
    }
  },
  getStyles() {
    return {
      overlay: {
        background: `rgba(0,0,0,${this.props.opacity})`,
        bottom: 0,
        display: 'block',
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
  renderModal() {
    if (this.state.modalVisible) {
      return (
        <div style={this.state.styles.modal} className={this.props.className} ref="modal">
          {this.props.children}
        </div>
      );
    }
    return null;
  },
  renderContentOverlay() {
    if (this.props.animation) {
      return (
        <CSSTransitionGroup
          transitionAppear
          transitionName={this.props.animation}
          component="div"
          style={this.state.styles.subWrapper}
          onClick={this.onClick}
          ref="overlay"
          >
          {this.renderModal()}
        </CSSTransitionGroup>
      );
    }
    return (
      <div
        style={this.state.styles.subWrapper}
        onClick={this.onClick}
        ref="overlay"
        >
        {this.renderModal()}
      </div>
    );
  },
  renderOverlay() {
    if (this.state.overlayVisible) {
      return (
        <div style={this.state.styles.overlay}>
          <div style={this.state.styles.wrapper}>
            {this.renderContentOverlay()}
          </div>
        </div>
      );
    }
    return null;
  },
  render() {
    if (this.props.animation) {
      return (
        <CSSTransitionGroup transitionName="fade" transitionAppear component="div">
          {this.renderOverlay()}
        </CSSTransitionGroup>
      );
    }
    return (
      <div>
        {this.renderOverlay()}
      </div>
    );
  },
});

export default Modal;
