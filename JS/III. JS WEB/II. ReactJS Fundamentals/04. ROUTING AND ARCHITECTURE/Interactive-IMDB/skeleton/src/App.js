import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import Header from "./Header/Header";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            isAdmin: false,
            movies: [],
            storyLine: null,
            title: null,
            trailerUrl: null,
            redirectToReferrer: false
        };
    }

    componentDidMount() {
        const localUsername = localStorage.getItem('username');
        const isAdmin = localStorage.getItem('isAdmin') === 'true';

        if (localUsername) {
            this.setState({
                username: localUsername,
                isAdmin: isAdmin
            });
        }

        fetch('http://localhost:9999/feed/movies')
            .then(response => response.json())
            .then(body => {
                this.setState({
                    movies: body.movies
                });

                toast.success(body.message, {
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 2000
                });
            });
    }

    handleSubmit(event, data, isSignup) {
        event.preventDefault();

        fetch('http://localhost:9999/auth/sign' + (isSignup ? 'up' : 'in'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(body => {
            localStorage.setItem('username', body.username);
            localStorage.setItem('isAdmin', body.isAdmin);

            if (body.username) {
                this.setState({
                    username: body.username,
                    isAdmin: body.isAdmin
                });

                toast.success(`Welcome, ${body.username} !`, {
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 2000
                });
            } else {
                toast.error(`${body.message}`, {
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 2000
                });
            }
        });
    }

    handleCreateSubmit(event, data) {
        event.preventDefault();

        fetch('http://localhost:9999/feed/movie/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(body => {
            fetch('http://localhost:9999/feed/movies')
                .then(response => response.json())
                .then(body => {
                    this.setState({
                        movies: body.movies,
                        redirectToReferrer: true
                    });

                    toast.success('Create movie successfully!', {
                        closeButton: false,
                        hideProgressBar: true,
                        autoClose: 2000
                    });

                    toast.success(body.message, {
                        closeButton: false,
                        hideProgressBar: true,
                        autoClose: 2000
                    });
                });

            if (!body.errors) {
                toast.success(body.message, {
                    closeButton: false,
                    hideProgressBar: true,
                    autoClose: 2000
                });
            }
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    viewStoryLine(storyLine, title) {
        this.setState({
            storyLine: storyLine,
            title: title
        });

        toast.success('Load movie Story line!', {
            closeButton: false,
            hideProgressBar: true,
            autoClose: 2000
        });
    }

    viewTrailer(trailerUrl, title) {
        this.setState({
            title: title,
            trailerUrl: trailerUrl
        });

        toast.success('Load movie trailer!', {
            closeButton: false,
            hideProgressBar: true,
            autoClose: 2000
        });
    }

    logout() {
        localStorage.removeItem('username');
        this.setState({
            username: null,
            storyLine: null,
            title: null,
            trailerUrl: null,
            isAdmin: false
        });

        toast.success('Logout successfully!', {
            closeButton: false,
            hideProgressBar: true,
            autoClose: 2000
        });
    }

    render() {
        if (this.state.redirectToReferrer) {
            this.setState({
                redirectToReferrer: false
            });

            return <Redirect to={{
                pathname: '/',
                state: { from: this.props.location }
            }}/>;
        }

        return (
            <div className="App">
                <ToastContainer />

                <Header isAdmin={this.state.isAdmin}
                        username={this.state.username}
                        logout={this.logout.bind(this)}
                />

                <Switch>
                    <Route exact
                           path="/"
                           render={() =>
                               <Home username={this.state.username}
                                     movies={this.state.movies}
                                     title={this.state.title}
                                     storyLine={this.state.storyLine}
                                     trailerUrl={this.state.trailerUrl}
                                     viewStoryLine={this.viewStoryLine.bind(this)}
                                     viewTrailer={this.viewTrailer.bind(this)}
                               />}
                    />

                    <Route path="/register"
                           render={() =>
                               this.state.username
                               ?
                               <Redirect to={{
                                   pathname: '/',
                                   state: { from: this.props.location }
                               }}/>
                               :
                               <Register
                                   handleSubmit={this.handleSubmit.bind(this)}
                                   handleChange={this.handleChange}
                               />
                           }
                    />

                    <Route path="/login"
                           render={() =>
                               this.state.username
                               ?
                               <Redirect to={{
                                   pathname: '/',
                                   state: { from: this.props.location }
                               }}/>
                               :
                               <Login
                                   handleSubmit={this.handleSubmit.bind(this)}
                                   handleChange={this.handleChange}
                               />
                           }
                    />

                    <Route path="/create"
                           render={() =>
                               this.state.isAdmin
                               ?
                               <Create
                                   handleCreateSubmit={this.handleCreateSubmit.bind(this)}
                                   handleChange={this.handleChange}
                               />
                               :
                               <Redirect to={{
                                   pathname: '/',
                                   state: { from: this.props.location }
                               }}/>
                           }
                    />

                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
