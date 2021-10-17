//Movie database
function movie(title,duration,stars){
    this.movieTitle=title;
    this.duration=duration;
    this.stars=stars;  
}
 let movieDB={
        movieTitle:"Cruella",
        duration:"2 hours",
        stars:['a','b','c']
    };
    const para=document.createElement('p')
    const body=document.querySelector('body')
    para.innerHTML=movieDB.movieTitle+" lasts for "+movieDB.duration+". stars: "+movieDB.stars.join();
    body.append(para);

