import React from 'react';

let PeopleCard = (props) => (
    <div className="col-md-3">
        <div className="card border-dark mb-3">
            <div className="card-header">
                <p>{props.person.name}</p>
            </div>
            <div className="card-body text-dark">
                <p className="card-text"> {props.person.age}</p>
                <p className="card-text"> {props.person.gender}</p>
                <a href={props.person.url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
)

export default PeopleCard;