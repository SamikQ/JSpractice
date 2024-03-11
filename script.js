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