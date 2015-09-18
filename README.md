# react-simple-modal
[![NPM](https://nodei.co/npm/react-simple-modal.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-simple-modal/)

[![dependencies](https://david-dm.org/sergiodxa/react-simple-modal.png)](https://david-dm.org/sergiodxa/react-simple-modal)

React modal make it simple.

## How use it
Download it with:

```bash
npm i -S react-simple-modal
```

Then import it in your code:

```javascript
import Modal from 'react-simple-modal';
```

Now you can use it as any React component.

Enjoy!

## Props
### className
Define your own className property to the modal, must be a string, is optional, default 'Modal'.

### onClickOverlay
A function to be called when the user clicked the overlay, must be a function, is required.

### opacity
Define the opacity of the overlay, must be a number between 0 and 1, is optional, default ```0.5```.

### visible
Define is the Modal is visible, must be a boolean, is required.

## Example
```javascript
import React from 'react';
import Modal from 'react-simple-modal';

const App = React.createClass({
  getInitialState() {
    return {
      visible: true,
    };
  },
  onClickOverlay() {
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <Modal onClickOverlay={this.onClickOverlay} visible={this.state.visible}>
        <h1>Hello world!</h1>
      </Modal>
    );
  },
});

React.render(<App />, document.body);
```
