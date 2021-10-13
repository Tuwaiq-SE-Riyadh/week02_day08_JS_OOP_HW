const movie= {

    title: "Silent",
    duration: 120,
    stars: ["Burt Reynolds","James Caan","Liza Minnelli"]

}

const para = document.querySelector("p");

para.innerText = movie.title+" for "+movie.duration+" minutes. Stars: "+movie.stars.join()+".";