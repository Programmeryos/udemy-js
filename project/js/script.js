'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


document.addEventListener('DOMContentLoaded', () => {

    const advElements = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        promoList = document.querySelector('.promo__interactive-list'),
        promoForm = document.querySelector('form.add'),
        addInput = promoForm.querySelector('.adding__input'),
        addCheckbox = promoForm.querySelector('[type="checkbox"');

    advElements.forEach((e) => {
        e.remove();
    });

    promoGenre.textContent = 'Драма';

    promoBg.style.backgroundImage = 'url("img/bg.jpg")';

    movieDB.movies.sort();  

    function createMovieList (films, parent) {
        parent.innerHTML = '';

        films.forEach((e, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${e}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((e, i) => {
            e.addEventListener('click', () => {
                e.parentElement.remove();
                movieDB.movies.splice(i, 1);
    
                createMovieList(films, parent);
            });
        });
    }

    promoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;

        let arr = newFilm.split('');
        arr[0] = arr[0].toUpperCase();        
        newFilm = arr.join('');

        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        const favorite = addCheckbox.checked;

        if (favorite) {
            console.log('Сделать любимым');
        }

        movieDB.movies.push(newFilm);
        movieDB.movies.sort();  

        createMovieList(movieDB.movies, promoList);
        
    });
    
    createMovieList(movieDB.movies, promoList);
    console.log(movieDB);
});