import React from 'react';

import Label from './../Label';

import { CardStyle, CardContent } from './CardStyle';

function Card({ characters = [] }) {
  return characters && characters.length>0 && characters.map((character) => (
    <CardStyle key={character.id}>
      <figure>
        <img src={character.image} alt="character" />
      </figure>
      <CardContent>
        <Label title="name" content={character.name} />
        <Label title="id" content={character.id} />
        <Label title="status" content={character.status} />
        <Label title="species" content={character.species} />
        <Label title="gender" content={character.gender} />
        <Label title="origin" content={character.origin.name} />
        <Label title="last location" content={character.location.name} />
      </CardContent>
    </CardStyle>
  ));
}

export default Card;
