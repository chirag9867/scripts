const addMovieButton = document.getElementById("add-movie-btn");
const srchButton = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById("movie-list");

    if(movies.length === 0){
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filterMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filterMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        const { info } = movie;
        const extraKey = Object.keys(info)[1];  // ✅ extraName from object
        const extraVal = info[extraKey];         // ✅ extraValue from object
        movieEl.textContent = `${info.title} - ${extraKey}: ${extraVal}`;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    let title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === ''){
        return;
    }

    const newMovie = {
        info:{
            title: title,
            [extraName]: extraValue,
        },
        id: Math.random()
    };

    movies.push(newMovie);
    renderMovies();

    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
srchButton.addEventListener('click', searchMovieHandler);
console.log(movies);



