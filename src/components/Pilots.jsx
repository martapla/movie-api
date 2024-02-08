/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const Pilots = ({ starshipPilots }) => {
  const [pilotList, setPilotList] = useState([]);

  const fetchPilots = async () => {
    const promises = starshipPilots.map(url => fetch(url).then(response => response.json()));
    const pilotsData = await Promise.all(promises);
    setPilotList(pilotsData);
  };

  useEffect(() => {
    if (starshipPilots && starshipPilots.length > 0) {
      fetchPilots();
    }
  }, [starshipPilots]);

  return (
    <>
      <h2>Pilots</h2>
      {pilotList.map((pilot, index) => (
        <div key={index}>
          <h1 className='text-sm md:text-md uppercase text-yellow-500 font-jedi-outline font-semibold'>
            {pilot.name}
          </h1>
          <div>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} alt={pilot.name} />
          </div>
          <p>Height: {pilot.height}</p>
          <p>Mass: {pilot.mass}</p>
          <p>Gender: {pilot.gender}</p>
        </div>
      ))}
    </>
  );
};

export default Pilots;



