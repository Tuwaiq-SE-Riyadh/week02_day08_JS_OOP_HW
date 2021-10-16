const movi = {
    title:"Cinderella",
    duration: 58,
    stars:["Camila Cabello","Billy Porter","Idina Menzel"," Pierce Brosnan"],
  };
  const p =document.createElement('p')
  const body=document.querySelector('body')
  body.append(p)
  p.innerText = movi.title + " lasts for " + movi.duration + " minutes . " + " stars : "+ movi.stars 
  
   