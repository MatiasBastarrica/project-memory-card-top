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

let chosen = [];

export function Cards({ handleScore }) {
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

  function handleCardClick(e) {
    const newPokeData = [...pokeData];
    setPokeData(newPokeData.sort(() => 0.5 - Math.random()));

    chosen.push(e.currentTarget.id);
    console.log(chosen);
    const selectedCards = [...chosen];
    const lastSelection = selectedCards.pop();
    if (!selectedCards.length && lastSelection) {
      handleScore();
    } else if (!selectedCards.includes(lastSelection)) {
      handleScore();
    } else {
      console.log("YOU LOOSE");
      chosen = [];
      handleScore(0);
    }
  }

  const pokemonItems = pokeData.map((data) => {
    return (
      <li
        key={data.name}
        id={data.name}
        onClick={handleCardClick}
        className="card"
      >
        <img className="card__img" src={data.imgUrl} alt={data.name} />
        <p className="card__title">{data.name}</p>
      </li>
    );
  });

  return (
    <>
      <ul className="cards-container">{pokemonItems}</ul>
    </>
  );
}
