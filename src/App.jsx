import { useState, useEffect } from "react";

import "./App.css";

const pokemons = [
  "pikachu",
  "charizard",
  "bulbasaur",
  "squirtle",
  "eevee",
  "ditto",
  "gengar",
  "snorlax",
  "dragonite",
  "arcanine",
  "gyarados",
  "mew",
];

function App() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    let ignore = false;

    pokemons.forEach((pokemon) => {
      const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((value) => {
          if (!ignore) {
            setPokeData((pd) => [
              ...pd,
              {
                name: value.species.name,
                imgUrl: value.sprites.other["official-artwork"].front_default,
              },
            ]);
          }
        });
    });

    return () => {
      ignore = true;
    };
  }, []);

  const pokemonItems = pokeData.map((data) => {
    return (
      <li key={data.name} className="card">
        <p className="card__title">{data.name}</p>
        <img className="card__img" src={data.imgUrl} alt={data.name} />
      </li>
    );
  });

  return (
    <>
      <h1>Project: Memory Card</h1>
      <ul className="cards-container">{pokemonItems}</ul>
    </>
  );
}

export default App;
