import React, {Component} from 'react';
import './Create.css';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            storyLine: null,
            trailerUrl: null,
            poster: null
        };

        this.handleChange = this.props.handleChange.bind(this);
    }

    render() {
        return (
            <div className="Create">
                <h1>Create Movie</h1>

                <form onSubmit={(event) => this.props.handleCreateSubmit(event, this.state)}>
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={this.handleChange} name="title" id="title" placeholder="Title"/>

                    <label htmlFor="storyLine">Story Line</label>
                    <input type="text" onChange={this.handleChange} name="storyLine" id="storyLine" placeholder="Text"/>

                    <label htmlFor="trailerUrl">Trailer Url</label>
                    <input type="text" onChange={this.handleChange} name="trailerUrl" id="trailerUrl" placeholder="Trailer Url"/>

                    <label htmlFor="poster">Movie Poster</label>
                    <input type="text" onChange={this.handleChange} name="poster" id="poster" placeholder="Image Url"/>

                    <input type="submit" value="Create"/>
                </form>
            </div>
        );
    }
}

export default Create;
