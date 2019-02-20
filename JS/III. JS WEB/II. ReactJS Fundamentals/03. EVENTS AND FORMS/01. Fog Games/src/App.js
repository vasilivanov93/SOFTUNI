import React, {Component} from 'react';
import './App.css';
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            games: [],
            hasFetched: false,
            loginForm: false,
        }
    }

    registerUser(user) {
        // TODO: register a user and login
    }

    loginUser(user) {
        // TODO: login a user and set sessionStorage items username and token
    }

    logout(event) {
       // TODO: prevent the default state
       // TODO: delete the data from the sessionStorage
       // TODO: update the state (user: null)
    }

    componentWillMount() {
        // TODO: check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)

       // TODO: fetch all the games
    }

    createGame(data) {
        // TODO: create a game using fetch with a post method then fetch all the games and update the state 
    }

    switchForm() {
        // TODO: switch the value of the loginForm property
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user}
                    logout={this.logout.bind(this)}
                    switchForm={this.switchForm.bind(this)}
                    loginForm={this.state.loginForm}
                />
                <AppContent
                    registerUser={this.registerUser.bind(this)}
                    loginUser={this.loginUser.bind(this)}
                    games={this.state.games}
                    createGame={this.createGame.bind(this)}
                    user={this.state.user}
                    loginForm={this.state.loginForm}
                />
                <AppFooter/>
            </main>
        )
    }
}

export default App;


