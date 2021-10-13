class animals  {
    constructor(name, age , image, sound) {
        this.name=name ;
        this.age = age;
        this.sound=sound;
        this.image=image;
      }
    
  
    eats() {
      console.log(`${this.name} eats food`);
    };
  
   
  }


  class cat extends animals {
    constructor(name, age, image, sound) {
      super(name,age , image, sound )
    
    }
  
    eats(){
        console.log(`${this.name} eats mouse`);
    }
  
    Animalsound(){
        console.log(`${this.name} sounds is  ${this.sound}`);
    }
    

  }
  
  class dog extends animals {
    constructor(name, age, image, sound) {
      super(name,age , image, sound )
    
    }
  
    eats(){
        console.log(`${this.name} eats chicken`);
    }
  
    Animalsound(){
        console.log(`${this.name} sounds is ${this.sound}`);
    }
    

  }
  class fish extends animals {
    constructor(name, age, image, color ) {
      super(name,age ,image)
      this.color=color;
    
    }
  
    eats(){
        console.log(`${this.name} eats flakes`);
    }
  
    

  }

  const cat1= new cat('cat' ,'3','/cat.png','meow')
  const dog1 =new dog ('Dog','5','/dog.jpg','woof')
  const fish1 =new fish('fish','4','/fish.png','yallow')

//for fish 
const image =document.querySelector('#image3')
image.src = fish1.image;

image.addEventListener("click" , function(){
     document.getElementById("par3").innerText =
     "name animal is "+ fish1.name+" age : " + fish1.age+" color " +fish1.color ;
     });


     //for cat
  const img =document.querySelector('#image1')
  img.src = cat1.image;

  img.addEventListener("click" , function(){
 document.getElementById("par").innerText =
 "name animal is "+ cat1.name+" age : " + cat1.age+" sound " +cat1.sound ;

  });

  //for dog 
  const img2 =document.querySelector('#image2')
  img2.src = dog1.image;

  img2.addEventListener("click" , function(){
    document.getElementById("par2").innerText =
    "name animal is "+ dog1.name+" age : " + dog1.age+" sound " +dog1.sound ;
   
     });




  
 
