
class Animal {

     constructor(name, age, image, sound, owner) {

        this.name=name
        this.age=age
        this.image=image
        this.sound=sound
        this.owner=owner

        this.bio= function(){
            return this.name+" - "+this.age+" - "+this.sound+" - "+this.owner;
        }
        }

        eats(){
            return animal.name+" eats food";
        }

        Animalsound(){}
       

    }

class Cat extends Animal{

    constructor(name, age, image, sound, owner){
        super(name, age, image, sound, owner);
    }

    eats(){
        return "Cats eat chicken";
    }

    Animalsound(){

        return "Cat sounds is meow";
    }

  
    
}

//Identify the Classes
class Dog extends Animal{

    constructor(name, age, image, sound, owner){
        super(name, age, image, sound, owner);
    }

    eats(){
        console.log("Dogs eat chicken")
    }

    Animalsound(){

        console.log("Dogs sounds is woof")
    }
 
}

class Fish extends Animal{

    constructor(name, age, image, sound, owner){
        super(name, age, image, sound, owner);
    }

    eats(){
        console.log("Fish eats flakes")
    }
  
}

const obj1 = new Cat("Cat", 2, "https://tse3.mm.bing.net/th?id=OIP.aMUAJ2rpPNIwtMJBz31PvQHaE8&pid=Api&P=0&w=250&h=167", "meow", "A")
const obj2 = new Dog("Dog", 1, "https://tse3.mm.bing.net/th?id=OIP.7OKz7XwppjF_uadvXT-VAgHaFj&pid=Api&P=0&w=239&h=179", "woof", "B")
const obj3 = new Fish("Fish", 1, "https://tse2.mm.bing.net/th?id=OIP.FVMem9_6e0FKRDYy-ecCYQHaE8&pid=Api&P=0&w=243&h=162", "gg", "C")


let a=document.querySelector("#img1");
a.src=obj1.image;

let b=document.querySelector("#img2");
b.src=obj2.image;

let c=document.querySelector("#img3");
c.src=obj3.image;

document.querySelector("#img1").addEventListener("click", function() {

    let s=document.createElement("p");
    s.innerText=obj1.bio();
    let w=document.querySelector("body");
    w.appendChild(s);
      
    console.log(obj1.bio())})

document.querySelector("#img2").addEventListener("click", function() {

    let s=document.createElement("p");
    s.innerText=obj2.bio();
    let w=document.querySelector("body");
    w.appendChild(s);
          
    console.log(obj2.bio())})

document.querySelector("#img3").addEventListener("click", function() {

    let s=document.createElement("p");
    s.innerText=obj3.bio();
    let w=document.querySelector("body");
    w.appendChild(s);
              
    console.log(obj3.bio())})
