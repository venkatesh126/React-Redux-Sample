import React, { Component } from 'react'
import UpdatedComponent from "../components/withCounter"
import HoverCounter from './hoverCounter';
export class Couner extends Component {


    render() {
        const { count, increment,name } = this.props;
      
        return (
            <div>
                {/* <HoverCounter /> */}
                <button onClick={increment} className="btn btn-sm btn-danger">Click {name}{count} times</button>

            </div>

        )
    }
}

export default UpdatedComponent(Couner,5)
