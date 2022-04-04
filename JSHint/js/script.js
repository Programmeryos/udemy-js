'use strict';

const personalMobieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    numberOfFilms: () => {
        const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        personalMobieDB.count = numberOfFilm;
    },
    toggleVisibleMyDB: () => {
        if (personalMobieDB.privat) {
            personalMobieDB.privat = false;
        } else {
            personalMobieDB.privat = true;
        }
    },
    showMyDB: function  () {
        if (!personalMobieDB.privat) {
            console.log('Главный объект программы');
        } 
    },
    writeYourFilm: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних фильмов что вы посмотрели', '');
            
            if (a != '' && a != null && a.length < 50) {
                let b = prompt('На сколько вы его оцените', '');

                if (b != '' && b != null && b.length < 50) {
                    personalMobieDB.movies[a] = b;
                } else {
                    i--;
                }
            } else {
                i--;
            }  
        }
    },
    yourRating: () => {
        if (personalMobieDB.count < 10) {
            console.log('Просмотрено довльно мало фильсов');
        } else if (personalMobieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMobieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGeners: function  () {
        for (let i = 1; i <= 3; i++) {
            const c = prompt(`Ваш любимый жанр под номером: ${i}`);

            if (c == null || c == ''){
                i--;
            } else {
                personalMobieDB.geners.push(c);
            }
        }
        personalMobieDB.geners.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это название из масива ${item} `);
        });
    }
};









