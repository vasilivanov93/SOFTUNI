import React, {Component} from 'react';
import './Home.css'
import ReactPlayer from 'react-player'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>All movies</h1>

                {
                    this.props.trailerUrl &&
                    <span>
                        <h2>Trailer of {this.props.title}</h2>

                        <ReactPlayer className="trailer" url={this.props.trailerUrl} controls />
                    </span>
                }

                {
                    this.props.storyLine &&
                    <span>
                        <h2>Story Line of {this.props.title}</h2>

                        <p>{this.props.storyLine}</p>
                    </span>
                }

                <ul className="movies">
                    {
                        this.props.movies.map(movie =>
                            this.props.username
                            ?
                            (<li key={movie._id} className="movie">
                                    <h2>{movie.title}</h2>

                                    <img src={movie.poster} alt="poster"/>

                                    <span>
                                        <button onClick={() => this.props.viewTrailer(movie.trailerUrl, movie.title)}>View Trailer</button>

                                        <button onClick={() => this.props.viewStoryLine(movie.storyLine, movie.title)}>View Story Line</button>
                                    </span>
                            </li>)
                            :
                            (<li key={movie._id} className="movie">
                                <h2>{movie.title}</h2>

                                <img src={movie.poster} alt="poster"/>
                            </li>)
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Home;
