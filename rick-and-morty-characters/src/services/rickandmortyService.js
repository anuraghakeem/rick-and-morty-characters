import axios from 'axios';

const urlBase = 'https://rickandmortyapi.com/api';

export const getCharacters = () =>
  axios
    .get(`${urlBase}/character`)
    .then((res) => res.data);

export const getCharactersBySearch = (name) =>
  axios
    .get(`${urlBase}/character?${name && `name=${name}`}`)
    .then((res) =>{return res.data});

export const getLocations = () =>
  axios
    .get(`${urlBase}/location`)
    .then((res) => res.data.results.map(location=>location.name));

export const getEpisodes = () =>
  axios
    .get(`${urlBase}/episode`)
    .then((res) => res.data.results.map(episode=>{return {episodeName:episode.name,episodeurl:episode.url}}));