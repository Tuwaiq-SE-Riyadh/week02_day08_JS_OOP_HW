
//--------------------parent class----------------------------------

class Animals{


    constructor(name, age, image, sound){

        this.name = name
        this.age = age
        this.image = image
        this.sound = sound
    }

    eats(){

        return "animal eats food"
    }
    Animalsound(){

        return "Animal sound is"
    }
}

//-------------------------Cat----------------------------


class Cat extends Animals{

    constructor(name, age, image, sound){

        super(name, age, image, sound)
    }

    eats(){

        return  Cat.name + " eats mouse"
    }

    Animalsound(){

        return Cat.sound  ;
    }
} 

//-------------------------Dog----------------------------

class Dog extends Animals{

    constructor(name, age, image, sound){

        super(name, age, image, sound)
    }

    eats(){

        return Dog.name +" dogs eats chicken"
    }

    Animalsound(){

        return Dog.sound;
    }
} 

//---------------------Fish----------------------------------

class Fish extends Animals{

    constructor(name, age, image, sound){

        super(name, age, image, sound)
    }

    eats(){

        return Fish.name + " eats flakes";
    }

    Animalsound(){

        return Fish.sound;
    }
} 

//------------------------------create object----------------------------

const cat1 = new Cat("teta", 2, "https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1716771988.jpg", "meyooo")
const dog1 = new Dog("petpul", 5, "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/pit-bull-featured.jpg", "hoho")
const fish1 = new Fish("salmon", 3, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEKsYvrP3SVa0SdiVk7LumgC5kwWz3Yx6Ng&usqp=CAU", "no sound")


//-----------------------images---------------------------

document.querySelector('#catImg').src = cat1.image
document.querySelector('#dogImg').src = dog1.image
document.querySelector('#fishImg').src = fish1.image


//----------------------------clicking---------cat----------------

document.querySelector('#catImg').addEventListener("click", function (e) {

    const box1 = document.querySelector('#box1') 
    const ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = "cat name : " + cat1.name
    box1.appendChild(li1)
   
    let li2 = document.createElement('li')
    li2.innerHTML = "cat age : " + cat1.age
    box1.append(li2)

    let li3 = document.createElement('li')
    li3.innerHTML = "cat eats : " + cat1.eats()
    box1.append(li3)

    let li4 = document.createElement('li')
    li4.innerHTML = "cat sound : " + cat1.Animalsound()
    box1.append(li4)



//----------------------------clicking------------dog-------------
    
    
})
document.querySelector('#dogImg').addEventListener("click", function (e) {

    const box2 = document.querySelector('#box2') 
    const ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = "dog name : " + dog1.name
    box2.appendChild(li1)
   
    let li2 = document.createElement('li')
    li2.innerHTML = "dog age : " + dog1.age
    box2.append(li2)

    let li3 = document.createElement('li')
    li3.innerHTML = "dog eats : " + dog1.eats()
    box2.append(li3)

    let li4 = document.createElement('li')
    li4.innerHTML = "cat sound : " + dog1.Animalsound()
    box2.append(li4)
    
})


//----------------------------clicking--------------fish-----------

document.querySelector('#fishImg').addEventListener("click", function (e) {

    const box3 = document.querySelector('#box3') 
    const ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = "fish name : " + fish1.name
    box3.appendChild(li1)
   
    let li2 = document.createElement('li')
    li2.innerHTML = "fish age : " + fish1.age
    box3.append(li2)

    let li3 = document.createElement('li')
    li3.innerHTML = "fish eats : " + fish1.eats()
    box3.append(li3)

    let li4 = document.createElement('li')
    li4.innerHTML = "cat sound : " + fish1.Animalsound()
    box3.append(li4)
    
})


