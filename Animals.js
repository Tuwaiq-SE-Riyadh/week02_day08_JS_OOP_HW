let img1=document.querySelector("#img1")
let img2=document.querySelector("#img2")
let img3=document.querySelector("#img3")


class Animal {
    constructor(name,age,image,sound){
        this.name=name
        this.age=age
        this.image=image
        this.sound=sound
    }
    eats(){
        return this.name +" eats food"
    }

    animalsound(){}
}

class Cat extends Animal {
    constructor(name,age,image,sound){
        super(name,age,image,sound)
    }

    eats(){
        return "cats eats mouse"
    }

    animalsound(){
        return "cat sounds is meow"
    }

}

class Dog extends Animal{
    constructor(name,age,image,sound){
        super(name,age,image,sound)
    }

    eats(){
        return "dogs eats chicken"
    }

    animalsound(){
        return "dogs sounds is woof"
    }
}

class Fish extends Animal{
    constructor(name,age,image,sound,color){
        super(name,age,image,sound)
        this.color =color
    }

    eats(){
        return "fish eats flakes"
    }

    
}

let cat1 = new Cat("cat1",10,"https://images.theconversation.com/files/168121/original/file-20170505-1693-ymh4bc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip","meow")
cat1.eats();

let dog1 = new Dog("dog1",12,"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg","woof")
dog1.eats();

let fish1 = new Fish("fish1",2,"https://www.fishkeepingworld.com/wp-content/uploads/2018/02/Blue-and-yellow-fish.png","","yellow")
fish1.eats();


function cat1Detalis(){
    document.querySelector("#para1").innerHTML = cat1.name
    document.querySelector("#para2").innerHTML = cat1.age
    document.querySelector("#para3").innerHTML = cat1.sound
}

function dog1Detalis(){
    document.querySelector("#para4").innerHTML = dog1.name
    document.querySelector("#para5").innerHTML = dog1.age
    document.querySelector("#para6").innerHTML = dog1.sound
}


function fish1Detalis(){
    document.querySelector("#para7").innerHTML = fish1.name
    document.querySelector("#para8").innerHTML = fish1.age
    document.querySelector("#para9").innerHTML = fish1.color
}