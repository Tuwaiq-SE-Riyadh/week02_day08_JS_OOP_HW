// ## Exercise 2: Animals

class animal{
    constructor(name, age ,image, sound){
        this.name = name
        this.age = age
        this.image = image
        this.sound = sound
    }

    eats(){
        console.log(this.name + " eats food");
    }
}

class cat extends animal{
    constructor(name, age, image, sound, owner) {
        super(name, age, image ,sound)
        this.owner = owner;
        this.info = function() {
            return " Name: " + this.name + " Age: " + 
            this.age +" Sound: " + this.sound + 
            " Owner: " + this.owner;
          };
      }

    eats(){
        console.log("cats eats mouse");
    }

    Animalsound(){
        console.log("cat sounds is" + this.sound);
    }
}

class dog extends animal{
    constructor(name, age, image,sound, owner) {
        super(name, age, image ,sound)
        this.owner = owner;
        this.info = function() {
            return " Name: " + this.name + " Age: " + 
            this.age +" Sound: " + this.sound + 
            " Owner: " + this.owner;
          };
      }

    eats(){
        console.log("dogs eats chicken");
    }

    Animalsound(){
        console.log("dogs sounds is" + this.sound);
    }
}

class fish extends animal{
    constructor(name, age, image,sound, color) {
        super(name, age, image ,sound)
        this.color = color;
        this.info = function() {
            return " Name: " + this.name + " Age: " + 
            this.age + " Color: " + this.color;
          };
      }

    eats(){
        console.log("fish eats flakes");
    }
}

const dog1 = new dog("jun", 4 , "/images/dog.webp" ,"woof" , "Khaled");
const cat1 = new cat("mon", 3 , "/images/cat.webp" ,"meow" ,"Sara");
const fish1 = new fish("suna", 1 , "/images/fish.jpg" , "None" , "red");

//  display img
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

img1.src = dog1.image;
img2.src = cat1.image;
img3.src = fish1.image;

// to show info 
const btnText = document.querySelector('#img1');
btnText.addEventListener("click", function(){
    const moreText = document.querySelector('#more');
    moreText.style.display = "inline";

    const ul =document.createElement("ul")
    const li1=document.createElement("li")
    const li2=document.createElement("li")
    const li3=document.createElement("li")
    const li4=document.createElement("li")
    
    li1.innerText="Name :"+dog1.name;
    li2.innerText="Age : "+dog1.age;
    li3.innerText="Sound : "+dog1.sound;
    li4.innerText="Owner : "+ dog1.owner;

    moreText.append(ul)
    ul.append(li1)
    ul.append(li2)
    ul.append(li3)
    ul.append(li4)


});
  
const btnText1 = document.querySelector('#img2');
btnText1.addEventListener("click", function(){
    const moreText1 = document.querySelector('#more1');
    moreText1.style.display = "inline";

    
    const ul =document.createElement("ul")
    const li1=document.createElement("li")
    const li2=document.createElement("li")
    const li3=document.createElement("li")
    const li4=document.createElement("li")
    
    li1.innerText="Name :"+cat1.name;
    li2.innerText="Age : "+cat1.age;
    li3.innerText="Sound : "+cat1.sound;
    li4.innerText="Owner : "+ cat1.owner;

    moreText1.append(ul)
    ul.append(li1)
    ul.append(li2)
    ul.append(li3)
    ul.append(li4)

});

const btnText2 = document.querySelector('#img3');
btnText2.addEventListener("click", function(){
    const moreText2 = document.querySelector('#more2');
    moreText2.style.display = "inline";

    const ul =document.createElement("ul")
    const li1=document.createElement("li")
    const li2=document.createElement("li")
    const li3=document.createElement("li")
    const li4=document.createElement("li")
    
    li1.innerText="Name :"+fish1.name;
    li2.innerText="Age : "+fish1.age;
    li3.innerText="Sound : "+fish1.sound;
    li4.innerText="Color : "+ fish1.color;

    moreText2.append(ul)
    ul.append(li1)
    ul.append(li2)
    ul.append(li3)
    ul.append(li4)

});
