const movie = {
    info:{
        title: 'inception',
        genre: 'scientific',
    },
    year: 2010
};

const {title, genre, year} = movie;
movie.title = 'odyssey';
console.log(movie);

let {title: movieTitle, genre: movieGenre, year: movieYear} = movie;

console.log(title);
console.log(genre);
console.log(year);

movieTitle = 'gladiator';

console.log(movieTitle);
console.log(movieGenre);
console.log(movieYear);


if('title' in movie){
    console.log(`title exist in movie`);
}
else{
    console.log('title does not exist in movie');
}