let myFavMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(movie) {
   document.write(movie.title + ' lasts for ' + movie.duration + ' minutes'+'<br>');
    let starsString = 'Stars: ';
    for (let i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i];
        if (i != movie.stars.length -1) {
            starsString += ', ';
        }
    }
    console.log(starsString);
}

// Or...
function printMovie(movie) {
    document.write(movie.title + ' lasts for ' + movie.duration + ' minutes'+'<br>');
    document.write('It stars ' + movie.stars.join(', '));
}
printMovie(myFavMovie);