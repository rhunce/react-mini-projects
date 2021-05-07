import React, { useState, useEffect } from 'react';
import data from './data';
import Title from './Title.js';
import Reviews from './Reviews.js';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section'>
      <Title />
      <Reviews
        people={people}
        setPeople={setPeople}
        index={index}
        setIndex={setIndex}
      />
    </section>
  );
}

export default App;
