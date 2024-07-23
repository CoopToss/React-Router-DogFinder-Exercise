import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      <h1>Dog List</h1>
      {dogs.map(dog => (
        <div key={dog.name}>
          <Link to={`/dogs/${dog.name.toLowerCase()}`}>
            <h2>{dog.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;