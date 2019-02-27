import React, { Component } from 'react';
import './App.css';
import PostForm from './components/postform';
import { Provider } from "react-redux";
import store from "../src/store"
import ReduxDemo from './components/reduxDemo';
import Header from "./components/header";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import posts from './components/posts';
import Home from './components/home';
import Conditional from './components/conditionalRendering';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <React.Fragment>
              <Header />
              <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/posts" component={posts} exact></Route>
                <Route path="/Conditional" component={Conditional} exact></Route>
              </Switch>
            </React.Fragment>
          </BrowserRouter>

          {/* <PostForm />
          <Posts /> */}
          {/* <ReduxDemo /> */}
        </div>
      </Provider>

    );
  }
}

export default App;
