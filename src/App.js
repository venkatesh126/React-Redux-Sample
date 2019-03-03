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
import Couner from './components/Couner';
import  HoverCounter  from './components/hoverCounter';
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
                {/* <Route path="/counter" component={Couner} exact ></Route> */}
              </Switch>
            </React.Fragment>
          </BrowserRouter>
         
          {/* <PostForm />
          <Posts /> */}
          {/* <ReduxDemo /> */}
          <Couner name="venkat subbu" />
          <HoverCounter />
        </div>
      </Provider>

    );
  }
}

export default App;
