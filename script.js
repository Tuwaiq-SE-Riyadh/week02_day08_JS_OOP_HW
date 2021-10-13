const movie ={
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function print(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + 'minutes');
    console.log('It stars ' + movie.stars.join(''));
}
print(movie);