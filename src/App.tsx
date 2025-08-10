import { useState } from "react";
import AnimalShow from "./components/AnimalShow"

function getRandomAnimal() {
    const animals = ['cat', 'dog', 'bird', 'cow', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
  }

function App() {
  // uses array destructuring to create a state variable `count` and a function `setCount` to update it
  const [animals, setAnimals] = useState<string[]>([]);
  
  const handleAddAnimalClick = () => {
    // use functional update to ensure the latest state is used
    setAnimals(animals => [...animals, getRandomAnimal()]);
  }

  const renderedAnimals = () => {
    return animals.map((animal, index) => (
      <AnimalShow key={index} type={animal} />
    ));
  }
  
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center my-8">Welcome to the Animal Show</h1>
        <button className="bg-blue-500 ml-4 text-white px-4 py-2 rounded" onClick={handleAddAnimalClick}>Add Animal</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {renderedAnimals()}
      </div>
    </>
  )
}

export default App
