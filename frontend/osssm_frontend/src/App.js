import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login_register/Index';
import { Register } from './components/login_register/Index';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       lvri : true
    }
  }

  changeState() {
    const { lvri } = this.state
    if(lvri){
      this.rightSide.classList.remove("right")
      this.rightSide.classList.add("left")
    } else {
      this.rightSide.classList.remove("left")
      this.rightSide.classList.add("right")
    }
    this.setState( (prevState) => ({
      lvri : !prevState.lvri
    }))
  }
  
  render() {
    const { lvri } = this.state 
    const current = lvri ? "Register" : "Login"
    
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => this.container = ref}>
            { lvri && <Login containerRef={ref => this.current = ref}/>}
            { !lvri && <Register containerRef={ref => this.current = ref}/>}
          </div>
          <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
        </div>
      </div>
    )
  }
}

const RightSide = props => {
  console.log(props.current)
  return (
      <div className="right-side right" ref={props.containerRef} onClick={props.onClick}>
          <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
      </div>
  )
}

export default App;
