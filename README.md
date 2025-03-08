# react-alert

A simple react alert component

## Installation

```bash
$ npm install react-alert
```

It expects external `react`, `react-dom` and `react-addons-css-transition-group`.

## Usage

To use it, you have to import the `AlertContainer` component, like this:

```js
import React from 'react';
import AlertContainer from 'react-alert';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.alertOptions = {
      offset: 20,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  showAlert(){
    this.msg.show('Some text or component', {
      time: 2000,
      type: 'success',
      icon: <img src="path/to/some/img/32x32.png" />
    });
  }

  render(){
    return(
      <div>
        <AlertContainer ref={(a) => this.msg = a} {...this.alertOptions} />
        <button onClick={this.showAlert}>Show Alert</button>
      </div>
    );
  }
}
```

## Options

The `AlertContainer` component accepts the following options:

```js
{
  //defaults
  offset: 20, //the offset of the alert from the page border, can be any number
  position: 'bottom left', //the position of the alert, can be [bottom left, bottom right, top left, top right]
  theme: 'dark', //the color theme of the alert, can be [dark, light]
  time: 5000, //the time in miliseconds to the alert close itself, use 0 to prevent auto close (apply to all alerts)
  transition: 'scale' //the transition animation, can be [scale, fade]
}
```

When you call the `show` method, you can include the following options as a second parameter:

```js
{
  time: 0, //the time in miliseconds to the alert close itself, use 0 to prevent auto close (apply to this alert only), default is 5000
  type: 'info', //the alert type, can be [info, success, error], default is info
  icon: <img src="path/to/some/img/32x32.png" /> //the icon to show in the alert, if none is given the default of each type will be showed
}
```

## Api

Once you have the reference of the `AlertContainer` you can call the following methods:

```js
//show an alert
this.msg.show('Some message or component');
//show a info alert
this.msg.info('Some info message!');
//show a success alert
this.msg.success('Some success message!');
//show an error alert
this.msg.error('Some error message!');
//removes all alerts from the page
this.msg.removeAll();
```