import React, { Component } from 'react'
import axios from 'axios'

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    submitLogin = (e) => {
        e.preventDefault()

        const loginData = {
            username: this.username,
            password: this.password
        }

        console.log(loginData)

        axios.post('users/login', loginData)
            .then(res => {
                console.log(res)
                this.props.submitLogin(res.data.token)
            })
            .catch(e => {
                console.log("error logging in because of ", e)
            })


    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
        )
    }
}

