
// movie = m1
let m1 = {
    title:"hunter x hunter",
    duration: 190,
    stars:["Gon Freecss","Killua Zoldyck","Hisoka","Kurapika","Leorio"]
}

const printTheM1 = document.querySelector("h1")
printTheM1.innerText=("title: " + m1.title +". duration: "+ m1.duration +". Stars: "+ m1.stars.join())