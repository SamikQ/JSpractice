"use strict";

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

start();
detectPersonalLevel();
rememberMyFilms();
showMyDB();
writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    return console.log(personalMovieDB);
  }
}

function start() {
  numberOfFilms = +prompt("How many movies did you watch?", "type your answer");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt(
      "How many movies did you watch?",
      "type your answer"
    );
  }
}

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert("You wathced less films than avarage person");
  } else if (numberOfFilms < 30 && numberOfFilms >= 10) {
    alert("you are avarage watcher");
  } else if (numberOfFilms > 30) {
    alert("You are awesome");
  }
}

function rememberMyFilms() {
  for (let i = 0; i <= 1; i++) {
    const a = prompt("Last watched movie?", ""),
      b = prompt("Rate last movie?", "");
    if (a === "" || b === "" || a.length >= 50) {
      alert("Please, type your movies");
      i--;
    } else {
      personalMovieDB.movies[a] = b;
    }
  }
}

function writeYourGenres() {
  for (let i = 0; i <= 2; i++) {
    const genre = prompt(`Type your favorite genre under no ${i+1}`, '');
    personalMovieDB.genres[i] = genre;
  }
}