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

 let dog1 = new Dog("nona",16,"data:image/jpeg;base64,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","woof","norad")
 let cat1 = new Cat("catoo",22,"https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d","meow","zyad")
 let fish1 = new Fish("meemo" ,9,"fish1.jpeg","fit","nor")


 // show the image 
//  const  c = document.querySelector("#dogImg")
//  c.src =  dogObject.image;
 document.querySelector("#dogImg").src = dog1.image;
 
 document.querySelector("#catImg").src = cat1.image;
 document.querySelector("#fishImg").src = fish1.image;

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
// console.log("hgvh");
//  let body=document.querySelector("body")
//  let imgper1=document.createElement("img")
//  imgper1.id="car1";
//  imgper1.alt="bb";
//  imgper1.style.width="200px";
//  imgper1.src =  dogObject.image;
//  imgper1.style.width=100;
//  document.body.appendChild(imgper1);
//  imgper1.addEventListener("click", function() {
//     const usersDiv = document.querySelector("#dogImgDiv");
//     usersDiv.innerHTML = "";
//     const ul = document.createElement("ul");
//     const li = document.createElement("li");
//     li.innerText = dogObject.name +" - "+ dogObject.age +" - "+ dogObject.sound +" - "+ dogObject.owner;
//     ul.append(li);
//     usersDiv.append(ul);
//    });
 
 // show when click 
 function showDog() {
         const usersDiv = document.querySelector("#dogImgDiv");
         usersDiv.innerHTML = "";
         const ul = document.createElement("ul");
         const li = document.createElement("li");
         li.innerText = dog1.name +" - "+ dog1.age +" - "+ dog1.sound +" - "+ dog1.owner;
         ul.append(li);
         usersDiv.append(ul);
     }

 function showCat() {
         const usersDiv = document.querySelector("#catImgDiv");
         usersDiv.innerHTML = "";
         const ul = document.createElement("ul");
         const li = document.createElement("li");
         li.innerText = cat1.name +" - "+ cat1.age +" - "+ cat1.sound +" - "+ cat1.owner;
         ul.append(li);
         usersDiv.append(ul);
     }

 function showFish() {
         const usersDiv = document.querySelector("#fishImgDiv");
         usersDiv.innerHTML = "";
         // for( let i = 0 ; i< )
         const ul = document.createElement("ul");
         const li = document.createElement("li");
         li.innerText = fish1.name +" - "+ fish1.age +" - "+ fish1.sound +" - "+ fish1.color;
         ul.append(li);
         usersDiv.append(ul);
     }
