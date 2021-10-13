
function movie(title, duration, stars) {

    this.title=title
    this.duration=duration
    this.stars=stars

    this.join= function(){

        return this.title+" lasts for "+this.duration+" minutes. Stars: "+this.stars;

    }
}

const movie1 = new movie("The maze runner", 50, ["Dylan O'Brien", "Thomas Sangster", "Kaya Scodelario"])

console.log(movie1.join())