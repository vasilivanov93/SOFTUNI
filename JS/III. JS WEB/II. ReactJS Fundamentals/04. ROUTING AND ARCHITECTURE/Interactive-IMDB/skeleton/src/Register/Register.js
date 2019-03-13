import React, {Component} from 'react';
import './Register.css';

class Register extends Component {
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
            <div className="Register">
                <h1>Register</h1>

                <form onSubmit={(event) => this.props.handleSubmit(event, this.state, true)}>
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={this.handleChange} name="username" id="username" placeholder="Ivan Ivanov"/>

                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={this.handleChange} name="email" id="email" placeholder="ivan@gmail.com"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={this.handleChange} name="password" id="password" placeholder="******"/>

                    <input type="submit" value="REGISTER"/>
                </form>
            </div>
        );
    }
}

export default Register;
