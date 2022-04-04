'use strict';

const personalMobieDB = {
   count: {},
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
        personalMobieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');

        while (personalMobieDB.count == '' || personalMobieDB.count == null || isNaN(personalMobieDB.count)) {
            personalMobieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const oneOfFilms = prompt('Один из последних фильмов что вы посмотрели?', '');
            const markOfFilm = prompt('На сколько вы кго оцените?', ''); 
        
            if (oneOfFilms != null && markOfFilm != null && oneOfFilms != '' && markOfFilm != '' && oneOfFilms.length < 50 && markOfFilm.length < 50) {
                personalMobieDB.movies[oneOfFilms] = markOfFilm;    
            } else {
                i--;
            } 
        }
    },
    detectPersonalLvl: function () {
        if (personalMobieDB.count < 10) {
            console.log('Мало');
        } else if (personalMobieDB.count >= 10 && personalMobieDB.count < 30) {
            console.log('Неплохо');
        } else if (personalMobieDB.count >=30) {
            console.log('Чел харош');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log('Главный объект програмы');
        }
    },
    writeYourGeners: function () {
        for (let i = 1; i <= 3; i++) {
            let a = prompt(`Ваш любимый жанр ${i}`);

            if (a === '' || a === null){
                i--;
            }

            personalMobieDB.genres.push(a);
        }
        personalMobieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр: ${item} - это ${i + 1}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMobieDB.privat) {
            personalMobieDB.privat = false;
        } else {
            personalMobieDB.privat = true;
        }
    }
};

let y = 5;

let x = y = 5;

console.log('a' > 'A');