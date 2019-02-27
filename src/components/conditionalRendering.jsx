import React, { Component } from 'react';

class Conditional extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            inputText: '', text: '', mode: 'view'
        }
    }

    handlerSave(event) {
        console.log("handlerSave")
        this.setState({ mode: 'edit', text: this.state.inputText })
    }
    handlerEdit(event) {
        console.log("handlerEdittt")
        this.setState({ mode: 'view', text: this.state.inputText });

    }

    handlerInput(event) {
        this.setState({ inputText: event.target.value });
    }
    inputRender() {
        let input;
        if (this.state.mode === 'view') {
            input = <input type="text" name="inputchange" value={this.state.inputText} onChange={(event) => this.handlerInput(event)} />
        } else {
            input = null;
        }
        return input;

    }
    buttonRender() {
        let button;
        if (this.state.mode === 'view') {
            button = <button onClick={(event) => this.handlerSave(event)}>Save</button>
        } else {
            button = <button onClick={(event) => this.handlerEdit(event)}>Edit</button>
        }
        return button;
    }
    render() {

        // 1. first method is  if else condition
        // 2. remove emtpy div just return null
        // 3. use Element variable
        // 4. Ternary opener
        // if (this.state.mode == "view") {
        //     return (<React.Fragment>
        //         <p>Text:{this.state.text}</p>
        //         <input type="text" name="inputchange" value={this.state.inputText} onChange={(event) => this.handlerInput(event)} />
        //         <button onClick={(event) => this.handlerSave(event)}>Save</button>
        //     </React.Fragment>);
        // } else {
        //     return (<React.Fragment>
        //         <p>Text:{this.state.text}</p>
        //         <button onClick={(event) => this.handlerEdit(event)}>Edit</button>
        //     </React.Fragment>);
        // }
        const view = this.state.view === 'view';
        console.log(view)
        return (

            <React.Fragment>
                {/* <p>Text:{this.state.text}</p> */}
                {/* 3. Method  */}
                {/* {this.inputRender()}
                {this.buttonRender()} */}
                {/* 4. Ternary Operator */}
                {/* {!view && (<input type="text" name="inputchange" value={this.state.inputText} onChange={(event) => this.handlerInput(event)} />)}
                <button onClick={!view ? this.handlerSave.bind(this) : this.handlerEdit.bind(this)}>{!view ? "Save" : "Edit"}</button> */}
                {/* 5.Immediately Invoked function expression */}
                {/* 6. Create Sub component (sfc) like edit component and save  component */}
                <p>Text: {this.state.text}</p>

                {
                    !view && (
                        <p>
                            <input
                               onChange={(event) => this.handlerInput(event)}
                                value={this.state.inputText} />
                        </p>
                    )
                }
                {
                    (() => {
                        const handler = view
                            ? this.handlerEdit.bind(this)
                            : this.handlerSave.bind(this);
                        const label = view ? 'Edit' : 'Save';

                        return (
                            <button onClick={handler}>
                                {label}
                            </button>
                        );
                    })()
                }
            </React.Fragment>
        )
    }
}



export default Conditional;