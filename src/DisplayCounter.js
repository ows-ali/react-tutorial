import React, { Component } from 'react'

export default class DisplayCounter extends Component {
    constructor(props) {
        console.log('cons')
        super(props)
        this.state={
            counter: props.counter
        }

    }
    componentDidMount() {
        console.log('did mount')
    }
    componentWillReceiveProps(newProps) {
        console.log('willreceiveprops(newProps)', newProps)
        this.setState({counter: newProps.counter*2})
    }
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate(nextprops,nextstate)", nextProps,nextState); 

        if (nextProps.counter == 5) return false 
        return true
        // return true; 
    } 
    render() {
        console.log('renderr')
        return (
            <>
            <div>DisplayCounter-To show data passed to child components and lifecycle methods</div>
            From props {this.props.counter}
            From state {this.state.counter}
            </>
            
        )
    }
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
}
