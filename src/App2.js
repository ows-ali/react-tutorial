import React, { Component } from 'react'

export default class App2 extends Component {
    constructor(){
        super()
        this.state = { 
            sayings: "hi",
            isLoggedIn: true,
    };
    this.func= this.func.bind(this)

    }
    // componentWillMount(){
    //     console.log('will mount')
    // }
    // componentDidMount() {
    //     console.log('did mount')


    // }
    func(e){
      // this.state.sayings = e.target.value 
      // this.setState({sayings:e.target.value}) 
    }
  
  render() {
    console.log('in render')

    return (<>
     <div>App2</div>
      <input value={this.state.sayings}
      // onChange={this.func}
      />

      {this.state.isLoggedIn==true ? <p>Welcome user</p> : <p>Please login</p>}

    </>
    
    )
  }
}
