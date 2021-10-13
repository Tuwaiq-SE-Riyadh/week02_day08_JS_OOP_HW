class Animal {
  constructor(animalName, age, image, sound) {
    this.animalName = animalName;
    this.age = age;
    this.image = image;
    this.sound = sound;
  }

  eats() {
    console.log(`${this.animalName} eats food`);
  }
  Animalsound() {}
}

class Cat extends Animal {
  constructor(animalName, age, image, sound, owner) {
    super(animalName, age, image, sound);
    this.owner = owner;
  }
  eats() {
    console.log(`cats eats mouse`);
  }
  Animalsound() {
    console.log("cat sounds is meow");
  }
}

class Dog extends Animal {
  constructor(animalName, age, image, sound, owner) {
    super(animalName, age, image, sound);
    this.owner = owner;
  }
  eats() {
    console.log(`dogs eats checken`);
  }
  Animalsound() {
    console.log("dogs sounds is woof");
  }
}

class Fish extends Animal {
  constructor(animalName, age, image, sound, color) {
    super(animalName, age, image, sound);
    this.owner = color;
  }
  eats() {
    console.log(`fish eats flakes`);
  }
}

const dog1 = new Dog("snow", 5, "images/dog.png", 'woof', 'john' );
const cat1 = new Dog("Billa", 1, "images/cat.png", 'meow', 'john' );
const fish1 = new Dog("blue", 1, "images/fish.jpg", '', 'john' );

function displayImage() {
  const img1 = document.querySelector('#dog')
  const img2 = document.querySelector('#cat')
  const img3 = document.querySelector('#fish')
  const body = document.querySelector('#parent');
  img1.src = dog1.image;
  img2.src = cat1.image;
  img3.src = fish1.image;
  console.log(img3);
  body.append(img1);
  body.append(img2);
  body.append(img3);


}

function displayInfo() {
  const img1 = document.querySelector('#dog')
  const body = document.querySelector('#parent');

  img1.addEventListener('click',function(e){
    const p = document.querySelector('#dogInfo')
    p.innerText = "Name: "+dog1.animalName +"\n "+"Age: "+ dog1.age+"\n Animal sound:  "+dog1.sound +"\n Animal Owner: "+dog1.owner
    body.append(p)     
  })
  const img2 = document.querySelector('#cat')
  img2.addEventListener('click',function(e){
    const p = document.querySelector('#catInfo')
    p.innerText = "Name: "+cat1.animalName +"\n "+"Age: "+ cat1.age+"\n Animal sound:  "+cat1.sound +"\n Animal Owner: "+cat1.owner
    body.append(p)     
  })

  const img3 = document.querySelector('#fish')
  img.addEventListener('click',function(e){
    const p = document.querySelector('#fishInfo')
    p.innerText = "Name: "+fish1.animalName +"\n "+"Age: "+ fish1.age+"\n Animal sound:  "+fish1.sound +"\n Animal Owner: "+fish1.owner
    body.append(p)     
  })


}
displayInfo()
displayImage()
