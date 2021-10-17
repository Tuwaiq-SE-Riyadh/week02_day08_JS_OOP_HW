class animal{
 constructor(name,age,image,sound) {
    this.Name=name;
    this.Age=age;
    this.Image=image;
    this.Sound=sound;
}
//functions
  eats() {
    console.log(animal.Name+" eats food");
}
animalSound(){
    console.log(animal.Name+" sound is unkown");
}
}
/*CLASS CAT*/
class cat extends animal{
constructor(name,age,image,sound,owner){
    super(name,age,image,sound);
    this.Owner=owner;
}
eats() {
    console.log("cats eats mouse");
}
animalSound(){
    console.log("cats sound is mewo");
}
}
/*CLASS DOG*/
class dog extends animal{
    constructor(name,age,image,sound,owner){
        super(name,age,image,sound);
        this.Owner=owner;
    }
    eats() {
        console.log("dogs eats chicken");
    }
    animalSound(){
        console.log("dogs sound is woof");
    }
    }
/*FISH CLASS*/
class fish extends animal{
    constructor(name,age,image,sound,color){
        super(name,age,image,sound);
        this.Color=color;
    }
    eats() {
        console.log("fish eats flakes");
    }
    }
//CAT OBJ
let Cat={
    Name:"bella",
    Age:"2 years",
    Image:"cat.jpg",
    Sound:animalSound(),
    Owner:"N"
    };
//DOG OBJ
let Dog={
    Name:"jjj",
    Age:"5 years",
    Image:"dog.jpg",
    Sound:animalSound(),
    Owner:"N"
};
//FISH OBJ
let Fish={
    Name:"fff",
    Age:"10 Days",
    Image:"fish.jpg",
    Color:"blue"
};
console.log(cat.Image+dog.Image+fish.Image);