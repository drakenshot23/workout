import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Workout</h1>
        </div>
      </Provider>
    );
  }
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => bindActionCreators({

// }, dispatch);

export default App;
