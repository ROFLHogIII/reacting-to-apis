import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import MovieCard from "./components/MovieCard"
import logo from "./logo.png"


const filmAPI = "https://ghibliapi.herokuapp.com/films/"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loadMovies: false
        }
    }
    componentDidMount() {
        fetch(filmAPI)
            .then(res => res.json())
            .then(ob => this.setState({ movies: ob }))
    }
    loadMovies() {
        this.setState({ loadMovies: true })
    }
    render() {
        if (this.state.loadMovies) {
            return (
                <React.Fragment>
                    {this.state.movies.map((movie, index) =>
                        <MovieCard key={index} movie={movie} />
                    )}
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <img src={logo} alt="Ghibli Logo" />
                    <h1>Loading...</h1>
                    <button onClick={() => this.loadMovies()}>Load Movies</button>
                </React.Fragment>
            )
        }
    }
};
export default App;