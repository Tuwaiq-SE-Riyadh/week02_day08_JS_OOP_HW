class Animal{
    constructor(name, age, image, sound )
    {
        this.name=name;
        this.age=age;
        this.image=image;
        this.sound=sound;
    }

    eats()
    {
        return ""+this.name +" eats food";
    }

    Animalsound()
    {
        return""+this.name +" and the is sound: "+ this.sound;
    }
}

class Cat extends Animal{
    constructor(name,age,image,sound,owner){
        super(name,age,image,sound);
        this.owner=owner;
    }
    eats()
    {
        return "cats eats mouse";
    }

    Animalsound()
    {
    return "cat sounds is :" + this.sound;
    }

}

class Dog extends Animal{
    constructor(name,age,image,sound,owner){
        super(name,age,image,sound);
        this.owner=owner;
    }
    eats()
    {
        return "dogs eats chicken";
    }

    Animalsound()
    {
    return "dogs sounds is :"+this.sound;
    }

}

class Fish extends Animal{
    constructor(name,age,image,sound,color){
        super(name,age,image,sound);
        this.color=color;
    }
    eats()
    {
        return "fish eats flakes";
    }
}

let dogObject = new Dog("toto",10,"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*","woof","saad")
let catObject = new Cat("caca",12,"https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d","meow","fahad")
let fishObject = new Fish("zeze" ,2,"https://static.toiimg.com/thumb/msid-80788864,width-1200,height-900,resizemode-4/.jpg","tii","blue")

console.log(dogObject)
console.log(dogObject.eats())
console.log(dogObject.Animalsound())
console.log("--------")
console.log(catObject)
console.log(catObject.eats())
console.log(catObject.Animalsound())
console.log("--------")
console.log(fishObject)
console.log(fishObject.eats())

// show the image 
document.querySelector("#dogImg").src = dogObject.image;
document.querySelector("#catImg").src = catObject.image;
document.querySelector("#fishImg").src = fishObject.image;

// addEventListener
// document.querySelector("#dogImg").addEventListener("click",function(){
//     document.querySelector("#dogImgLabel").innerHTML=dogObject.name
// })

// document.querySelector("#catImg").addEventListener("click",function(){
//     document.querySelector("#catImgLabel").innerHTML=catObject.name
// })

// document.querySelector("#fishImg").addEventListener("click",function(){
//     document.querySelector("#fishImgLabel").innerHTML=fishObject.name
// })


// show when click 
function showDog() {
        const usersDiv = document.querySelector("#dogImgDiv");
        usersDiv.innerHTML = "";
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.innerText = dogObject.name +" - "+ dogObject.age +" - "+ dogObject.sound +" - "+ dogObject.owner;
        ul.append(li);
        usersDiv.append(ul);
    }

function showCat() {
        const usersDiv = document.querySelector("#catImgDiv");
        usersDiv.innerHTML = "";
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.innerText = catObject.name +" - "+ catObject.age +" - "+ catObject.sound +" - "+ catObject.owner;
        ul.append(li);
        usersDiv.append(ul);
    }

function showFish() {
        const usersDiv = document.querySelector("#fishImgDiv");
        usersDiv.innerHTML = "";
        // for( let i = 0 ; i< )
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.innerText = fishObject.name +" - "+ fishObject.age +" - "+ fishObject.sound +" - "+ fishObject.color;
        ul.append(li);
        usersDiv.append(ul);
    }
    