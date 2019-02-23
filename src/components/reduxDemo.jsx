import React, { Component } from 'react';
import { createStore } from "redux";

class ReduxDemo extends Component {
    state = {}
    render() {
        // step2: create reducer and it has 2states ... state and action
        const reducer = function (state, action) {
            if (action.type === "ATTACK") {
                return action.payload
            } if (action.type === "KICK") {
                return action.payload
            }
            return state;
        }
        // Step1: reducer and state
        const store = createStore(reducer, "Peace");


        // Subscribe get the current state of dataaa
        console.log(store, "storree")
        store.subscribe(() => {
            console.log(store.getState(), "state now")
        })

        store.dispatch({ type: "ATTACK", payload: "Hey This is Venkateshhhhhh" });
        store.dispatch({ type: "KICK", payload: "Fuck offf" })


        return (<div>HI</div>);
    }
}

export default ReduxDemo;