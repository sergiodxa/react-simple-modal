// node_modules
import React from 'react/addons';
// styles
import '../styles/app.styl';
// own components
import MyModal from './MyModal.jsx';

const { CSSTransitionGroup } = React.addons;

const App = React.createClass({
  displayName: 'Example',
  getInitialState() {
    return {
      modalOpen: false,
    };
  },
  renderModal() {
    if (this.state.modalOpen) {
      return (
        <MyModal
          key={new Date().getTime()}
          modalOpen={this.state.modalOpen}
          toggle={this.toggleModal}
        />
      );
    }
    return null;
  },
  render() {
    return (
      <div>
        <button onClick={this.toggleModal} className="Btn">
          Open modal
        </button>

        <CSSTransitionGroup transitionName="fade">
          {this.renderModal()}
        </CSSTransitionGroup>
      </div>
    );
  },
  toggleModal(event) {
    event.preventDefault();
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  },
});

export default App;
