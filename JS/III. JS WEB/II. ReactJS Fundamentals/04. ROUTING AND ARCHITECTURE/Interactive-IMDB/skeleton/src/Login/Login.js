import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            email: null
        };

        this.handleChange = this.props.handleChange.bind(this);
    }

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={(event) => this.props.handleSubmit(event, this.state, false)}>
                    <label htmlFor="usernameLogin">Username</label>
                    <input type="text" onChange={this.handleChange} name="username" id="usernameLogin" placeholder="Ivan Ivanov"/>

                    <label htmlFor="passwordLogin">Password</label>
                    <input type="password" onChange={this.handleChange} name="password" id="passwordLogin" placeholder="******"/>

                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default Login;
