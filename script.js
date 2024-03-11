<<<<<<< HEAD
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
=======
'use strict';

/* Задание на урок:

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = prompt('How many movies did you watch?', 'type your answer');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('You wathced less films than avarage person');
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    alert('you are avarage watcher');
} else if (personalMovieDB.count > 30) {
    alert('You are awesome');
} else {
    alert('mistake happened');
}

for (let i = 0; i <= 1; i++) {
    const a = prompt('Last watched movie?', ''),
        b = prompt('Rate last movie?', '');
    if (a === '' || b === '' || a.length >= 50) {
        alert('Please, type your movies');
        i--;
    } else {
        personalMovieDB.movies[a] = b;
    }
}

console.log(personalMovieDB);
>>>>>>> eb5b2b6b91b755521c9a3071f4b434d3ea7122b1
