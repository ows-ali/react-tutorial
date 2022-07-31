import React, { Component } from 'react'
import FromChild from './FromChild'

export default class CounterInClass extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            count: 0,
            // count2:9
        }

        this.incCount = this.incCount.bind(this)
        this.decCount = this.decCount.bind(this)
        this.decCallback = this.decCallback.bind(this)
    
    }

    incCount=()=> {
        console.log('in func',this)
        // console.log(this.state.count)
        this.setState({count: this.state.count+1})
    }

    decCount() {
        this.setState({count: this.state.count-1})
    }
    decCallback(num) {
        this.setState({count: 
        num
            // this.state.count-1
        
        })

    }
    render() {

        return (
            <>
                <h2>CounterInClass</h2>
                <button onClick={()=>this.incCount()}>Increment</button>
                <p>Count: {this.state.count}</p>
                <button onClick={this.decCount}>Decrement</button>
                <FromChild 
                    decCallback={this.decCallback} 
                    parentName="Class component"
                />
            </>

        )
    }
}
