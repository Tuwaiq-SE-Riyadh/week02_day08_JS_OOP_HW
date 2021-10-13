const movie = {
    title :' August Rush',
    duration : 144,
    stars : [" Freddie Highmore", "Keri Russell","Jonathan Rhys Meyers"],
    }

document.getElementById("p").innerHTML = (movie.title + " lasts for " + movie.duration + " minutes. Stars:" +movie.stars.join());