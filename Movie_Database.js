const movies = [
    {
     movieName: "cast away",
      duration: 120,
      stars: ["Tom","Nick","Lari"],
    },
    {
      itemName: "mission impossible 4",
      duration: 160,
      stars: ["Tom","Simon","Jeremy"],
    },
    {
      itemName: "terminator",
      duration: 90,
      stars: ["Arnold","Linda","Lance"],
    },
  ];

  function print(){
    for(i=0;i<movies.length;i++){
        console.log("Puff the "+ movies[i].movieName +" lasts for "+ movies[i].duration + "  minutes. Stars: "+ movies[i].stars)
    }
    
  }