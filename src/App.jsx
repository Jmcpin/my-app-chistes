import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [chiste, setChiste] = useState("");
  const [frase, setFrase] = useState("")
  const [contenido, setContenido] = useState('chiste');

  const getChiste = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });

    try {
      const chiste = await response.json();
      setContenido('chiste');
      setChiste(chiste.joke);
    } catch (error) {
      console.log(error);
      setChiste('');
    }
  };

  const getFrase = async () => {
    const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random');

    try {
      const frase = await response.json();
      setContenido('frase');
      setFrase(frase.data[0].quoteText);
    } catch (error) {
      console.log(error);
      setFrase('');
    }
  };

  useEffect(() => {
    getChiste();
  }, []);

  const getButton = () => {
    if (contenido === 'chiste') {
      return <button onClick={getFrase}>Frases</button>;
    } else {
      return <button onClick={getChiste}>Chistes</button>;
    }
  };

  return (
    <>
      <div>
        {getButton()}
        <p>{contenido === 'chiste' ? chiste : frase}</p>
      </div>
    </>
  )
}

export default App
