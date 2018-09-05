import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import MovieCard from "./components/MovieCard"
import PeopleCard from "./components/PeopleCard"
import logo from "./logo.png"


const filmAPI = "https://ghibliapi.herokuapp.com/films/"
const peopleAPI = "https://ghibliapi.herokuapp.com/people"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loadMovies: false,
            people: [],
            loadPeople: false
        }
    }

    loadMovies() {
        this.setState({ loadMovies: true, loadPeople: false })
        fetch(filmAPI)
            .then(res => res.json())
            .then(ob => this.setState({ movies: ob }))
    }
    loadPeople() {
        this.setState({ loadPeople: true, loadMovies: false })
        fetch(peopleAPI)
            .then(res => res.json())
            .then(ob => this.setState({ people: ob }))
    }

    render() {
        if (this.state.loadMovies) {
            return (
                <React.Fragment>
                    <div className="row">
                    <div className="col-md-12">
                        <img className="rounded mx-auto d-block" src={logo} alt="Ghibli Logo" />
                    </div>
                    <div className="col-md-12">
                        <button onClick={() => this.loadPeople()}>Load People</button>
                    </div>
                        {this.state.movies.map((movie, index) =>
                            <MovieCard key={index} movie={movie} />
                        )}
                    </div>
                </React.Fragment>
            )
        } else {
            if (this.state.loadPeople) {
                return (
                    <React.Fragment>
                        <div className="row">
                            <div className="col-md-12">
                                <img className="rounded mx-auto d-block" src={logo} alt="Ghibli Logo" />
                            </div>
                            <div className="col-md-12">
                                <button onClick={() => this.loadMovies()}>Load Movies</button>
                            </div>
                            {this.state.people.map((person, index) =>
                                <PeopleCard key={index} person={person} />
                            )}
                        </div>
                    </React.Fragment>
                )
            } else {
                return (
                    <React.Fragment>
                        <div className="col-md-12">
                            <img className="rounded mx-auto d-block" src={logo} alt="Ghibli Logo" />
                        
                        <h1>Loading...</h1>
                        <button onClick={() => this.loadMovies()}>Load Movies</button>
                        <button onClick={() => this.loadPeople()}>Load People</button>
                        </div>
                    </React.Fragment>
                )
            }
        }
    }
};
export default App;