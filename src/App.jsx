import { useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    // Obtenemos un chiste de la API
    
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
    const joke = await response.json();
    console.log(joke)
    //const joke = await response.json();

    // Actualizamos el estado con el chiste
    setJoke(joke.joke);
  };

  return (
    <>
      <div>
        <button onClick={getJoke}>Obtener chiste</button>
        <p>{joke}</p>
      </div>
    </>
  );
}

export default App
