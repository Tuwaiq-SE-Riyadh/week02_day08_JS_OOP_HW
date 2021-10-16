// Animal class (parent)
class Animal {
    constructor(name, age, image, sound){
        this.name = name;
        this.age = age;
        this.image = image;
        this.sound = sound;
    }

    eats(){
        return this.name + " eats food";
    }
// in the requirements he didn't say creat this method
// but in the child classes he said
// override the `Animalsound` method
// thats why i create it
    animalSound(){
        return this.name + " sounds is " + this.sound
    }
}

// Cat class (child of Animal)
class Cat extends Animal {
    constructor(name, age, image, sound, owner){
        super(name, age, image, sound);
        this.owner = owner;
    }
    eats(){
        return  this.name + " eats mouse";
    }

    animalSound(){
        return this.name + " sounds is meow"
    }
}

// Dog class (child of Animal)
class Dog extends Animal {
    constructor(name, age, image, sound, owner){
        super(name, age, image, sound);
        this.owner = owner;
    }
    eats(){
        return  this.name + " eats chicken";
    }

    animalSound(){
        return this.name + " sounds is woof"
    }
}

// Fish class (child of Animal)
class Fish extends Animal {
    constructor(name, age, image, sound, color){
        super(name, age, image, sound);
        this.color = color;
    }
    eats(){
        return  this.name + " eats flakes";
    }
}

let i = 0;
function setImage(element) {
    const catImg = document.createElement("img")
    catImg.src = element.image;
    i++;
    const src = document.getElementById("animal" + i);
    src.appendChild(catImg);
}

// object for Cat
const cat1 = new Cat("cat", 3, "./images/cat.jpg" , "meow", "Faisal");
// object for Dog
const dog1 = new Dog("dog", 7, "./images/dog.jpg" , "woof", "Anas");
// object for Fish
const fish1 = new Fish("fish", 1, "./images/fish.jpg" , "none", "Yellow");

// excut methods in the classes
// i try it on the console
cat1.animalSound();
cat1.eats();
dog1.animalSound();
dog1.eats();
fish1.eats();

setImage(cat1);
setImage(dog1);
setImage(fish1);

let animals = [cat1, dog1, fish1];

    const an1 = document.querySelector("#animal1");
    const an2 = document.querySelector("#animal2");
    const an3 = document.querySelector("#animal3");
    // show cat details when click the image
    an1.addEventListener("click" , function () {
        const ul = document.createElement("ul");

        let li = document.createElement("li");
        li.innerText = "name : " + animals[0].name;
        
        let li1 = document.createElement("li");
        li1.innerText = "age : " + animals[0].age;

        let li2 = document.createElement("li")
        li2.innerText = "sound : " + animals[0].sound;

        ul.appendChild(li);
        ul.appendChild(li1);
        ul.appendChild(li2);
        an1.append(ul);
    })

    // show dog details when click the image
    an2.addEventListener("click" , function () {
        const ul = document.createElement("ul");

        let li = document.createElement("li");
        li.innerText = "name : " + animals[1].name;
        
        let li1 = document.createElement("li");
        li1.innerText = "age : " + animals[1].age;

        let li2 = document.createElement("li")
        li2.innerText = "sound : " + animals[1].sound;

        ul.appendChild(li);
        ul.appendChild(li1);
        ul.appendChild(li2);
        an2.append(ul);
    })

    // show fish details when click the image
    an3.addEventListener("click" , function () {
        const ul = document.createElement("ul");

        let li = document.createElement("li");
        li.innerText = "name : " + animals[2].name;
        
        let li1 = document.createElement("li");
        li1.innerText = "age : " + animals[2].age;

        let li2 = document.createElement("li")
        li2.innerText = "sound : " + animals[2].sound;

        ul.appendChild(li);
        ul.appendChild(li1);
        ul.appendChild(li2);
        an3.append(ul);
    })
 