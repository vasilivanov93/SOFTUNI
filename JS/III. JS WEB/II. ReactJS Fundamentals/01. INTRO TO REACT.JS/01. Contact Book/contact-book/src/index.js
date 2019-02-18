import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/app.css';
import contacts from './data/contacts';

const Main = () => (
    <div className="container">
        <Header />

        <div id="book">
            <div id="list">
                <h1>Contacts</h1>

                <div className="content">
                    <Contacts/>
                </div>
            </div>

            <div id="details">
                <h1>Details</h1>

                <Details index={currentlySelectedContactIndex}/>
            </div>
        </div>

       <Footer />
    </div>
);

const Header = () => (<header>&#9993; Contact Book</header>);

const htmlArr = [];
const handleClick = (index) => {
    currentlySelectedContactIndex = index;
    render();
};

contacts.forEach((contact, index) => {
    htmlArr.push(
        <div key={index} onClick={() => handleClick(index)} className="contact" data-id="id">
            <span className="avatar small">&#9787;</span>

            <span className="title">{contact.firstName} {contact.lastName}</span>
        </div>);
});

let currentlySelectedContactIndex = 0;

const Contacts = () => (
    htmlArr
);

const Details = (props) => (
    <div className="content">
        <div className="info">
            <div className="col">
                <span className="avatar">&#9787;</span>
            </div>

            <div className="col">
                <span className="name">{contacts[props.index].firstName}</span>

                <span className="name">{contacts[props.index].lastName}</span>
            </div>
        </div>

        <div className="info">
            <span className="info-line">&#9742; {contacts[props.index].phone}</span>

            <span className="info-line">&#9993; {contacts[props.index].email}</span>
        </div>
    </div>
);

const Footer = () => (<footer>Contact Book SPA &copy; 2017</footer>);

const render = () => ReactDOM.render(<Main/>, document.getElementById('root'));
render();