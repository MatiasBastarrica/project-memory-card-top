import { useState, useEffect } from "react";

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

export function Cards() {
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
      <ul className="cards-container">{pokemonItems}</ul>
    </>
  );
}
