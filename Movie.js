// # HW: OOP JavaScript 

// ## Exercise 1: The Movie Database

// * Create an object to store the following information about your favorite movie: 
   //title (a string), duration (a number), and stars (an array of strings).

// * Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

// * Maybe the [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 
     //method will be helpful here


// Answer >>>>>>>>
personPage()
function personPage() {
    // Object
    const movie1 = new movieObj("Puff the Magic Dragon", "lasts for 30 minutes", ["Puff", "Jackie", "Living Sneezes"]);
    console.log( "favorite movie is "+movie1.title+", lasts for "+movie1.duration+". Stars: " +printList(movie1.stars));
}

function printList(array) {
    temp = ""
    for (let i = 0; i < array.length; i++) {
        temp +=i+1+"- "+array[i]+" "
    }
    return temp
}
// Create object
function movieObj(title, duration, stars) {
    return {
        title : title ,
        duration : duration,
        stars : stars,
      };
}