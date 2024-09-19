import React, { useEffect, useState } from "react";
import { getAnimals } from "../services/api";

function AnimalManagement() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals()
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching animals:", error);
      });
  }, []);

  return (
    <div>
      <h2>Animal Management</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.animal_id}>
            {animal.name} - {animal.breed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalManagement;
