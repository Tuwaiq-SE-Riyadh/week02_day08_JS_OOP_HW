class Animals {
    constructor(name, age, image, sound) {
      this.name=name;
      this.age=age;
      this.image=image;
      this.sound=sound;
 
    }


    eat() {
      console.log(this.name +"eats food");
    };
  }



  class Cat extends Animals {
    constructor(name, age, image, sound) {
      super(name, age, image, sound)

    }

    eat() {
      console.log("cats eats mouse");
    };

    Animalsound() {
      console.log("cats sounds is meow");
    };
  }


  class Dog extends Animals {
    constructor(name, age, image, sound) {
      super(name, age, image, sound)

    }

    eat() {
      console.log("dogs eats chicken");
    };

    Animalsound() {
      console.log("dogs sounds is woof");
    };
  }


  class Fish extends Animals {
    constructor(name, age, image, sound,color) {
      super(name, age, image, sound)
      this.color=color;

    }

    eat() {
      console.log("fish eats flakes");
    };

  }
  const cat=new Cat("losy",3,"cat.jpg","mew")
  document.querySelector("#output1").src=cat.image;
  const dog=new Dog("bob",2,"dog.jpg","woof")
  document.querySelector("#output2").src=dog.image;
  const fish=new Fish("brre",1,"fish.jpg","flekes","blue")
  document.querySelector("#output3").src=fish.image;
   const body=document.querySelector("body")
   
  document.querySelector("#output1").addEventListener("click",function (e) {
    const div=document.querySelector("#L1")
   const ul =document.createElement("ul")
   const li1=document.createElement("li")
   const li2=document.createElement("li")
   const li3=document.createElement("li")
   li1.innerText="the cat name is"+cat.name;
   li2.innerText="the cat age "+cat.age;
   li3.innerText="the cat sound "+cat.sound;
   div.append(ul)
   ul.append(li1)
   ul.append(li2)
   ul.append(li3)
   

  })
  document.querySelector("#output2").addEventListener("click",function (e) {
    const div=document.querySelector("#L2")
   const ul =document.createElement("ul")
   const li1=document.createElement("li")
   const li2=document.createElement("li")
   const li3=document.createElement("li")
   li1.innerText="The dog name is"+dog.name;
   li2.innerText="The dog age "+dog.age;
   li3.innerText="The dog sound "+dog.sound;
   div.append(ul)
   ul.append(li1)
   ul.append(li2)
   ul.append(li3)
   

  })


document.querySelector("#output3").addEventListener("click",function (e) {
  const div=document.querySelector("#L3")
 const ul =document.createElement("ul")
 const li1=document.createElement("li")
 const li2=document.createElement("li")
 const li3=document.createElement("li")
 const li4=document.createElement("li")
 li1.innerText="The fish name is"+fish.name;
 li2.innerText="The fish age "+fish.age;
 li3.innerText="The fish sound "+fish.sound;
 li4.innerText="The fish color "+fish.color;
 div.append(ul)
 ul.append(li1)
 ul.append(li2)
 ul.append(li3)
 ul.append(li4)
 

})


