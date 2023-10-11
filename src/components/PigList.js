import React, { useState } from "react";

function PigList({ hogList, greasedOnly, sortOption }) {
  const [selectedHogIndex, setSelectedHogIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedHogIndex(index);
  };

  const filteredHogList = greasedOnly ? hogList.filter((hog) => hog.greased) : hogList;

 
  const sortedHogList = filteredHogList.sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div>
      <ul>
        {sortedHogList.map((hog, index) => (
          <li key={hog.image}>
            <h3>{hog.name}</h3>
            <img
              src={hog.image}
              alt={hog.name}
              onClick={() => handleClick(index)}
            />
            {selectedHogIndex === index && (
              <div>
                <h2>{hog.name}'s Details</h2>
                <p>Specialty: {hog.specialty}</p>
                <p>Weight: {hog.weight} kg</p>
                <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PigList;
