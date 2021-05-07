import React from 'react';
import Review from './Review.js';
import Buttons from './Buttons.js';

export default function Reviews({ people, setPeople, index, setIndex }) {
  return (
    <div className='section-center'>
      {people.map((person, personIndex) => {
        return (
          <Review
            person={person}
            personIndex={personIndex}
            people={people}
            index={index}
          />
        );
      })}
      <Buttons index={index} setIndex={setIndex} />
    </div>
  );
}
