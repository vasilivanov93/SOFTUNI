import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

import './Header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/" className="logo">Interactive IMDB</Link>

                <div className="header-right">
                    <NavLink exact to="/">Home</NavLink>

                    {
                        this.props.username
                        ?
                        (<span>
                            <Link to="#">Welcome {this.props.username}!</Link>
                                {
                                    this.props.isAdmin
                                    ?
                                    (<NavLink to="/create">Create</NavLink>)
                                    :
                                    null
                                }
                            <Link to="#" onClick={this.props.logout}>Logout</Link>
                        </span>)
                        :
                        (<span>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </span>)
                    }
                </div>
            </header>
        )
    }
}

export default Header;