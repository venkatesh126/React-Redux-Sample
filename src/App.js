import React, { Component } from 'react';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/postform';
import { Provider } from "react-redux";
import store from "../src/store"
import ReduxDemo from './components/reduxDemo';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
              RedUX and React JS
          </p>
          </header>
          <PostForm />
          <Posts />
          <ReduxDemo />
        </div>
      </Provider>
    );
  }
}

export default App;
