import React from 'react';
import Modal from 'react-simple-modal';

const MyModal = React.createClass({
  displayName: 'My Modal',
  propTypes: {
    toggle: React.PropTypes.func.isRequired,
    modalOpen: React.PropTypes.bool,
  },
  getDefaultProps() {
    return {
      modalOpen: false,
    };
  },
  render() {
    return (
      <Modal
        key={new Date().getTime()}
        visible={this.props.modalOpen}
        onClickOverlay={this.props.toggle}>
        <h2>
          This is a modal made with react-simple-modal.
        </h2>
        <button onClick={this.props.toggle}>
          Close modal
        </button>
      </Modal>
    );
  },
});

export default MyModal;
