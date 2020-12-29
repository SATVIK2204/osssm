import React, { Component } from 'react'
import axios from 'axios'

export class Register extends Component {
    constructor(props) {
        super(props)
    }

    submitRegister = (e) => {
        e.preventDefault()
        const registerData = {
            firstname : '',
            lastname : '',
            username : this.username,
            email : this.email,
            password : this.password
        }
        
        axios.post('users/signup', registerData)
            .then(res => {
                console.log("then", res)
            })
            .catch(e => {
                console.log("error", e)
            })
    }
    
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
        )
    }
}
