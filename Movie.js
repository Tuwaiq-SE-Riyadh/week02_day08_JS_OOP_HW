//Create an object to store the following information about your favorite movie: 
//title(a string), duration(a number), and stars(an array of strings).

//Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

//Maybe the join method will be helpful here
function movies(title, duration, stars) {
    this.title = title,
        this.duration = duration,
        this.stars = stars


    this.info = function() {
        return this.title + " " + this.duration + " minutes. Stars: " + this.stars.join();
    }
}

const m1 = new movies('warth of man', 118, ['aJason Statham ', 'Scott Eastwood', 'Niamh Algar'])
const m2 = new movies('tit', 90, ['a ', 'b', 'e'])
const m3 = new movies('tit', 90, ['a ', 'b', 'e'])

m1.info()
m2.info()
m3.info()