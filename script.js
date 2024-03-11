"use strict";

const numberOfFilms = +prompt("How many movies did you watch?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i <= 1; i++) {
  const a = prompt("last watched movie?", ""),
    b = prompt("rate it", "");
  if (a.length === 0 || b.length === 0 || a.length > 50) {
    i--;
    alert('type your movies')
  } else {
    personalMovieDB.movies[a] = b;
    alert('thanks');
  }
}

function returnNeighboringNumbers(num) {
  let a = [--num, num, ++num];
  console.log(a);
};

returnNeighboringNumbers(5);
