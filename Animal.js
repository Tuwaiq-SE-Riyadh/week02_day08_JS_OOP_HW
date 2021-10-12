class Animal{
    constructor(name, age, image, sound){
        this.name = name
        this.age = age
        this.image = image
        this.sound = sound
    }

    eats(){
        console.log(this.name+" eats food");
    }
}

const animal = new Animal("cat", 2, "dcsfc","meow")

class Cat extends Animal{
    constructor(name, age, image, sound, owner){
    super(name, age, image, sound)
    this.owner = owner
}

    eats(){
        console.log(this.name+" eats mouse");
    }
    animalSound(){
        console.log(this.name+" sound is "+this.sound);
    }

}

const cat = new Cat("cat","2","https://www.pnglib.com/wp-content/uploads/2020/08/ginger-cat_5f3403050daeb.png","meow","Mickel")

class Dog extends Animal{
    constructor(name, age, image, sound, owner){
        super(name, age, image, sound)
        this.owner = owner
    }
    eats(){
        console.log(this.name+" eats chicken");
    }
    animalSound(){
        console.log(this.name+" sound is "+this.sound);
    }
}

const dog = new Dog("dog","5","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dbjf0y6-5d6dd5c8-e082-4443-93ff-e5b45ef51501.png/v1/fill/w_900,h_821,strp/dog_labrador_on_a_transparent_background__by_prussiaart_dbjf0y6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1ZDQ1MDE0LThjYzMtNGM5OC1iMDJjLTVhMGNmM2E1NWRkZFwvZGJqZjB5Ni01ZDZkZDVjOC1lMDgyLTQ0NDMtOTNmZi1lNWI0NWVmNTE1MDEucG5nIiwiaGVpZ2h0IjoiPD04MjEiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzI1ZDQ1MDE0LThjYzMtNGM5OC1iMDJjLTVhMGNmM2E1NWRkZFwvcHJ1c3NpYWFydC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Di5TW2PwuO8M43mZUQ_qmLZNQd0KlVMFJcC6MBpWTMM","woof","John")

class Fish extends Animal{
    constructor(name, age, image, sound, color){
        super(name, age, image, sound)
        this.color = color
    }
    eats(){
        
            console.log(this.name+" eats flakes");
        
    }
}

const fish = new Fish("fish","1","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59a6349b-7a40-4af2-bf9a-3a13ddf42093/dd579fp-29413891-4f93-4e57-b512-f1e668e0ef0a.png/v1/fill/w_468,h_350,strp/tropical_fish_on_a_transparent_background__by_zoostock_dd579fp-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5YTYzNDliLTdhNDAtNGFmMi1iZjlhLTNhMTNkZGY0MjA5M1wvZGQ1NzlmcC0yOTQxMzg5MS00ZjkzLTRlNTctYjUxMi1mMWU2NjhlMGVmMGEucG5nIiwiaGVpZ2h0IjoiPD02NzQiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzU5YTYzNDliLTdhNDAtNGFmMi1iZjlhLTNhMTNkZGY0MjA5M1wvem9vc3RvY2stNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.0HHDHEycY-eQINIPFeTa_sZcQ0RxgesZPGDBX19o64I","NONE","Orange")


const Body = document.querySelector("body")
const Div = document.createElement("div")
Body.append(Div)
const catImg = document.createElement("img");
catImg.src = cat.image
catImg.id = "imgCat"
catImg.style = "width: 10rem; height: 10rem;"
Div.append(catImg)
const catId = document.querySelector("#imgCat")


catId.addEventListener("click",function(){
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")

    li.innerHTML = "The name of the cat is "+cat.name
    li2.innerHTML = "it's age is "+cat.age+" Years"
    li3.innerHTML = "its owner is "+cat.owner
    ul.append(li)
    ul.append(li2)
    ul.append(li3)
    Div.append(ul)
})

const newLine =document.createElement("br")
const newLine2 =document.createElement("br")
const newLine3 =document.createElement("br")
Body.append(newLine)
Body.append(newLine2)
Body.append(newLine3)


//-------------------------------Dog Div----------------------------
const Div2 = document.createElement("div")
Body.append(Div2)
const dogImg = document.createElement("img");
dogImg.src = dog.image
dogImg.id = "imgDog"
dogImg.style = "width: 10rem; height: 10rem;"
Div2.append(dogImg)
const dogId = document.querySelector("#imgDog")
dogId.addEventListener("click",function(){
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")

    li.innerHTML = "The name of the dog is "+dog.name
    li2.innerHTML = "it's age is "+dog.age +" Years"
    li3.innerHTML = "its owner is "+dog.owner
    ul.append(li)
    ul.append(li2)
    ul.append(li3)
    Div2.append(ul)
})


//-------------------------------Fish Div---------------------------
const newLine4 = document.createElement("br")
const newLine5 = document.createElement("br")
const newLine6 = document.createElement("br")

Body.append(newLine4)
Body.append(newLine5)
Body.append(newLine6)

const Div3 = document.createElement("div")
Body.append(Div3)
const fishImg = document.createElement("img");
fishImg.src = fish.image
fishImg.id = "imgFish"
fishImg.style = "width: 10rem; height: 10rem;"
Div3.append(fishImg)
const fishId = document.querySelector("#imgFish")

fishId.addEventListener("click",function(){
     
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")
    li.id ="li1"
    const li1 = document.querySelector("#li1")
    li.innerHTML = "The name of the fish is "+fish.name
    li2.innerHTML = "it's age is "+fish.age+" Years"
    li3.innerHTML = "its color is "+fish.color
    
    
    ul.append(li)
    ul.append(li2)
    ul.append(li3)
    
    Div3.append(ul)
    
    
    
})