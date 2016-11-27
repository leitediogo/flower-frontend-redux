import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { createStore } from 'redux'
import { addProcess } from '../actions/actions'
import reducer from '../reducers'

class AddProcessStep3 extends Component {
    handleChange(e) {
        /*
        console.log(e.target.type)
        console.log(e.target.value)
        console.log(e.target.id)
        */
        //const store = createStore(reducer)
        //console.log(store.getState())
        //store.dispatch(addProcess('test store'))
        //console.log(store.getState())
        // console.log('handleChange')
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        id="field5"
                        hintText="Insert Process field5"
                        floatingLabelText="Process field5"
                        /><br />
                    <TextField
                        id="field6"
                        hintText="Insert Process field6"
                        floatingLabelText="Process field6"
                        /><br />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default AddProcessStep3