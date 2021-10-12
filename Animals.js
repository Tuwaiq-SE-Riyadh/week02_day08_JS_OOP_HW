class Animals{

    constructor(name, age, image, sound) {
        this.name = name;
        this.age = age;
        this.image = image;
        this.sound = sound;
    }


eats(){
    return this.name + " eats ";}

animalsound(){
    console.log(this.name + " sounds is "+ this.sound);
}
}

class Cat extends Animals{

    constructor(name, age, image, sound, owner ){
        
        super(name, age, image, sound);
        this.owner = owner;
    }

    eats(){
        console.log( super.eats() + "mouse");}

}


class Doge extends Animals{

        constructor(name, age, image, sound, owner ){
            super(name, age, image, sound);
            this.owner = owner;
        }
    
        eats(){
            console.log(super.eats()+"chicken");}
    
    }

class Fish  extends Animals{

    constructor(name, age, image, sound, color ){
        super(name, age, image, sound);
        this.color = color;
    }

    eats(){
        console.log(super.eats()+"flakes");}

}

let cat = new Cat("Cat", "1" , "imges/cat.jfif","meow", "Tameem");
let doge = new Doge("Doge", "2" , "imges/doge.jfif","woof", "Ali");
let fish = new Fish("Fish", "3" , "imges/fish.jfif","none", "Red");


document.querySelector("#img1").src = cat.image;
document.querySelector("#img2").src = doge.image;
document.querySelector("#img3").src = fish.image;

console.log("---------------------------Cat----------------------------");
cat.eats();
cat.animalsound();
console.log("---------------------------Doge----------------------------");
doge.eats();
doge.animalsound();
console.log("---------------------------Fish----------------------------");
fish.eats();
fish.animalsound();

function cat_1(){
    document.querySelector("#u1").style.display = "block"
    document.querySelector("#l1").innerHTML = "Name : "+cat.name;
    document.querySelector("#l2").innerHTML = "Age : "+cat.age;
    document.querySelector("#l3").innerHTML = "Sound : "+cat.sound;
    document.querySelector("#l4").innerHTML = "Owner : "+cat.owner;

}
function doge_1(){
    document.querySelector("#u1").style.display = "block"
    document.querySelector("#l1").innerHTML = "Name : "+doge.name;
    document.querySelector("#l2").innerHTML = "Age : "+doge.age;
    document.querySelector("#l3").innerHTML = "Sound : "+doge.sound;
    document.querySelector("#l4").innerHTML = "Owner : "+doge.owner;
    
}
function fish_1(){
    document.querySelector("#u1").style.display = "block"
    document.querySelector("#l1").innerHTML = "Name : "+fish.name;
    document.querySelector("#l2").innerHTML = "Age : "+fish.age;
    document.querySelector("#l3").innerHTML = "Sound : "+fish.sound;
    document.querySelector("#l4").innerHTML = "Color : "+fish.color; 
}