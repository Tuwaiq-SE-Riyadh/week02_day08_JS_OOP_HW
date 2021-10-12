const movie =
{
    title:"Puff the Magic Dragon lasts for",
    duration: 50,
    stars: ["Puff","Jackie","Living","Sneezes"]
}

document.querySelector("#p1").innerHTML = movie.title +" "+ movie.duration +" minutes. "+ "Stars: " +movie.stars.join();
console.log( movie.title +" "+ movie.duration +" minutes. "+ "Stars: " +movie.stars.join() );