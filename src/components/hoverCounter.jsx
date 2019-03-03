import React, { Component } from 'react'
import UpdatedComponent from "../components/withCounter"

export class HoverCounter extends Component {

    render() {
        const { count ,increment} = this.props;
        return (
            <div>
                <h1 onMouseOver={() =>increment()}>Hove {count} me</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter,10)
