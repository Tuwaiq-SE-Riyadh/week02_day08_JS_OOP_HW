

const Movie ={

    movieTitle: "Titanic",
    duration: 350,
    stars: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]
}


document.querySelector('body').innerHTML = "movie information " + "movieTitle : " + Movie.movieTitle +
"duration : " + Movie.duration + "stars : " + Movie.stars.join('')
