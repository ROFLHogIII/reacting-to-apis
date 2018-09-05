import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import MovieCard from "./components/MovieCard"


const filmAPI = "https://ghibliapi.herokuapp.com/films/"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }
    componentDidMount() {
        fetch(filmAPI)
            .then(res => res.json())
            .then(ob => this.setState({ movies: ob }))
    }
    render() {
        return (
            <React.Fragment>
                {this.state.movies.map((movie, index) =>
                <MovieCard key={index} movie={movie} />
              )}

            </React.Fragment>
        );
    }
};
export default App;