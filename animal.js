
class Animal {
    constructor(name, age, image, sound) {
        this.name = name;
        this.age = age;
        this.image = image;
        this.sound = sound
    }

    eats() {
        return this.name + " eats food";
    }

    animalSound() {
        return this.name + " sounds is " + this.sound;
    }
}

class Cat extends Animal {
    constructor(name, age, image, sound, owner) {
        super(name, age, image, sound);
        this.owner = owner;
    }
    eats() {
        return this.name + " eats mouse";
    }

    animalSound() {
        return this.name + " sounds is " + this.sound;
    }
}

class Dog extends Animal {
    constructor(name, age, image, sound, owner) {
        super(name, age, image, sound);
        this.owner = owner;
    }
    eats() {
        return this.name + " eats chicken"
    }

    animalSound() {
        return this.name + " sounds is " + this.sound;
    }
}

class Fish extends Animal {
    constructor(name, age, image, sound, color) {
        super(name, age, image, sound);
        this.color = color;
    }

    eats() {
        return this.name + " eats flakes";
    }
}

// create cat object
var cat = new Cat("cat", 12, "any image", "mewo", "anas");

// create dog object
var dog = new Dog("dog", 16, "any image", "walf", "akram osama");

// create fish object
var fish = new Fish("fish", 16, "any image", "red");

// click the image
var className = document.getElementsByClassName("ximage");
for (var i = 0; i < className.length; i++) {
    className[i].addEventListener('click', function () {
        var childImage = document.getElementById("thumbnails").children;
        // clean all otherborder
        for (i = 0; i < childImage.length; i++) {
            childImage[i].children[0].children[0].style.border = "";
        }
        // then add the border for id given
        document.getElementById(this.id).style.border = "3px solid red";

        //aftar that show the data, but at the fisrt remove the all data if there is exist
       if(this.id == "image_cat"){
            document.getElementsByTagName("ul")[0].style.display = "block";
            document.getElementsByTagName("ul")[1].style.display = "none";
            document.getElementsByTagName("ul")[2].style.display = "none";
       }else if(this.id == "image_dog"){
        document.getElementsByTagName("ul")[1].style.display = "block";
        document.getElementsByTagName("ul")[0].style.display = "none";
        document.getElementsByTagName("ul")[2].style.display = "none";
       }else{
        document.getElementsByTagName("ul")[2].style.display = "block";
        document.getElementsByTagName("ul")[1].style.display = "none";
        document.getElementsByTagName("ul")[0].style.display = "none";
       }

        // now append the ul with li for cat
        if(this.id = "image_cat"){
            let name = document.getElementById("cat_name");
            let age = document.getElementById("cat_age");
            let sound = document.getElementById("cat_sound");
            let eats = document.getElementById("cat_eats");
            let owner = document.getElementById("cat_owner");

            name.innerHTML = "the name is " + cat.name;
            age.innerHTML = "the age is " + cat.age;
            sound.innerHTML = cat.animalSound();
            eats.innerHTML = cat.eats();
            owner.innerHTML = "the owner is " + cat.owner;
        }

         // now append the ul with li for dog
         if(this.id = "image_dog"){
            let name = document.getElementById("dog_name");
            let age = document.getElementById("dog_age");
            let sound = document.getElementById("dog_sound");
            let eats = document.getElementById("dog_eats");
            let owner = document.getElementById("dog_owner");

            name.innerHTML = "the name is " + dog.name;
            age.innerHTML = "the age is " + dog.age;
            sound.innerHTML = dog.animalSound();
            eats.innerHTML = dog.eats();
            owner.innerHTML = "the owner is " + dog.owner;
        }

          // now append the ul with li for fish
          if(this.id = "image_dog"){
            let name = document.getElementById("fish_name");
            let age = document.getElementById("fish_age");
            let eats = document.getElementById("fish_eats");
            let color = document.getElementById("fish_color");

            name.innerHTML = "the name is " + fish.name;
            age.innerHTML = "the age is " + fish.age;
            eats.innerHTML = fish.eats();
            color.innerHTML = "the color is " + fish.color;
        }

    }, false);
}
