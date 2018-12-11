import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => bindActionCreators({

// }, dispatch);

export default App;
