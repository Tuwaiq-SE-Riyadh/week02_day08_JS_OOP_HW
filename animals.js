class Animal{

constructor(name, age, image, sound){
this.name=name
this.age=age
this.image=image
this.sound=sound

}

eats(){

    console.log(this.name+" eats food")
}
animalSound(){

    console.log(this.name+" sound is unknown") 
}

}

class Cat extends Animal{
    constructor(name, age, image, sound, owner){
    super(name,age,image,sound)
    this.owner=owner

 }

 eats(){
     return console.log("cats eat mouse")
 }
 animalSound(){

    return console.log("cat sounds is meow")
 }
}

class Dog extends Animal{
    constructor(name, age, image, sound, owner){
    super(name,age,image,sound)
    this.owner=owner

 }

 eats(){
     return console.log("dogs eat chicken")
 }
 animalSound(){

    return console.log("dogs sound is woof")
 }
}

class Fish extends Animal{
    constructor(name, age, image, sound, color){
        super(name,age,image,sound)
        this.color=color
    
     }
 eats(){
    return console.log("fish eat flakes")

    }

}

const container=document.querySelector("#conatiner")

let img1 = document.createElement("img")
let img2 = document.createElement("img")
let img3 = document.createElement("img")

img1.src = "http://placekitten.com/350/450"
img2.src = "https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg"
img3.src = "https://upload.wikimedia.org/wikipedia/commons/7/71/Garibaldi_fish.jpg"

//I was not sure how to resize an image so I went online and found 
//https://stackoverflow.com/questions/170624/javascript-image-resize
img2.style.width='40%'
img3.style.width='35%'







img1.addEventListener("click", function (e) {
    alert("animal info:\n Name: "+cat1.name+"\n age: "+cat1.age+"\n sound: "+cat1.sound+"\n owner: "+cat1.owner );
  });

  img2.addEventListener("click", function (e) {
    alert("animal info:\n Name: "+dog1.name+"\n age: "+dog1.age+"\n sound: "+dog1.sound+"\n owner: "+dog1.owner );
  });

  img3.addEventListener("click", function (e) {
    alert("animal info:\n Name: "+fish1.name+"\n age: "+fish1.age+"\n sound: "+fish1.sound+"\n color: "+fish1.color );
  });


const cat1 = new Cat('sam', "1 year", img1, "mew", 'steve')
const dog1 = new Dog('bob', "2 years", img2, "woof", 'steve')
const fish1= new Fish('lee', "3 years", img3, "no sound", 'orange')
container.append(cat1.image)
container.append( dog1.image)
container.append(fish1.image)


function excute(){
    
console.log(cat1.eats())
console.log(cat1.animalSound())
console.log(dog1.eats())
console.log(dog1.animalSound())
console.log(fish1.eats())

}

