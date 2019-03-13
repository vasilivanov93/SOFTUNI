import React, {Component} from 'react';
import './App.css';
import Article from "../Article/Article";
import Register from "../Register/Register";
import Navigation from "../Navigation/Navigation";
import warningWrapper from "../hocs/warningWrapper";
import errorHandlingWrapper from "../hocs/errorhandlingWrapper";
import ArticleWithError from "../ArticleWithError/ArticleWithError";
import BindingForm from "../BindingForm/BindingForm";

const ArticleWithErrorAndWarning = warningWrapper(errorHandlingWrapper(ArticleWithError));
const ArticleWithWarning = warningWrapper(errorHandlingWrapper(Article));
const RegisterWithWarning = warningWrapper(errorHandlingWrapper(Register));
const NavigationWithWarning = warningWrapper(errorHandlingWrapper(Navigation));

class App extends Component {
    onSibmit(event, data) {
        event.preventDefault();
        console.log(data)
    }

    render() {
        return (
            <section className="App">
                {/*<ArticleWithErrorAndWarning />*/}

                <ArticleWithWarning/>

                <BindingForm onSubmit={this.onSibmit}>
                    <header>
                        <span className="title">Login</span>
                    </header>


                    Username:
                    <input name="username" type="text"/><br/>

                    Password:
                    <input name="password" type="password"/><br/>
                </BindingForm>

                <RegisterWithWarning/>

                <NavigationWithWarning/>
            </section>
        );
    }
}

export default App;
