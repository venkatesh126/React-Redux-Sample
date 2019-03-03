import React, { Component } from 'react';

const UpdatedComponent = (OriginalComponent,incCount) => {

    class WithCounter extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        counterInc = () => {
            this.setState({ count: this.state.count + incCount});
            // this.setState(prevState => {
            //     return { count: prevState.count + 1 }
            // })
        }
        render() {
         
            return (
                <OriginalComponent count={this.state.count} increment={this.counterInc} {...this.props}/>
            );
        }
    }
    return WithCounter
}

export default UpdatedComponent;