// ## Exercise 1: The Movie Database
// "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
function FavoriteMovies(title , duration , star1 , star2 , star3) {
    this.title = title;
    this.duration = duration;
    this.starss = {
        star1,
        star2,
        star3
      }; 
      this.PrintMoves = function() {
        return this.title + " for " + 
        this.duration +" minutes." + " Stars: " + this.starss.star1 + 
        ", " + this.starss.star2 + ", " + this.starss.star3 +"."
      };
}

const movies = new FavoriteMovies("Puff the Magic Dragon",30,"Puff","Jackie","Living Sneezes");
const para = document.querySelector("#para");
para.innerHTML = movies.PrintMoves();