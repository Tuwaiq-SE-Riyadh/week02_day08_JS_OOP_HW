
//create class name animal (this will be the parent class)
class animal {
    constructor(name, age , image ,sound) {
      this.name = name;
      this.age = age;
      this.image = image;
      this.sound = sound;
    }
    eats() {
    
      return `${this.name} eats food`;
    }
    Animalsound(){
      return `${this.name} sound is unknown`;  
    }
  }

  //create cat class (this will be child class)
  class Cat extends animal{
    constructor(name, age , image ,sound){
      super(name,age,image,sound);
    }
    eats() {
    
      return `cat eats mouse`;
    }
    Animalsound(){
      return `cat sound is meow`;  
    }

  }

  //create dog class (this will be child class)
  class Dog extends animal{
    constructor(name, age , image ,sound){
      super(name,age,image,sound);
    }
    eats() {
    
      return `Dog eats chicken`;
    }
    Animalsound(){
      return `Dog sound is woof`;  
    }

  }

  //create fishh class (this will be child class)
  class Fish extends animal{
    constructor(name, age , image ,sound,color){
      super(name,age,image,sound);
      this.color = color;
    }
    eats() {
    
      return `Fish eats  flakes`;
    }
   
  }

  //create object for dog, cat and fish classes
  const obj1 = new Cat("Lucy ",2,"cat.jpg","meow");
  const obj2 = new Dog("Milo ",3,"dog.jpg","woof");
  const obj3 = new Fish("Angel ",1,"fish.jpg","unknown","blue");

  console.log(obj1)
  console.log(obj2)
  console.log(obj3)
  console.log(obj1.eats())
  console.log(obj2.eats())
  console.log(obj3.eats())


//clicking on the image the details 

const im =document.querySelector("#img1")
im.onclick=function(){
  alert(obj1.name +" is " +obj1.age + " year old ,sound is :" + obj1.sound)
}

const i =document.querySelector("#img2")
i.onclick=function(){
  alert(obj2.name +" is " +obj2.age + " year old ,sound is :" + obj2.sound)
}

const g =document.querySelector("#img3")
g.onclick=function(){
  alert(obj3.name +" is " +obj3.age + " month old ,sound is :" + obj3.sound + "and her color is " + obj3.color)
}
  
 





