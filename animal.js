//class

//constructor with the animal name, age, image, and sound
//create method called eats that will return
//for example "animal eats food" where animal is the property name.
class animal {

    constructor(name, age, image, sound) {
        this.name = name
        this.age = age
        this.image = image
        this.sound = sound
    }

    eats() {
        return this.name + " eats food "
    }
    animalsound() {
        return ' '
    }


}


class Cat extends animal {
    constructor(name, age, image, sound) {
        super(name, age, image, sound)
    }
    eats() {
        return 'cats eats mouse'
    }

    animalsound() {
        return "cat sounds is " + this.sound
    }
}

class Dog extends animal {
    constructor(name, age, image, sound) {
        super(name, age, image, sound)
    }

    eats() {
        return 'dogs eats chicken'
    }

    animalsound() {
        return 'dogs sounds is ' + this.sound
    }

}


class Fish extends animal {
    constructor(name, age, image, sound, color) {
        super(name, age, image, sound)
        this.color = color

    }
    eats() {
        return 'fish eats flakes'
    }
}

//create object for dog, cat and fish classes and excute all the methods in the classes.

const cat1 = new Cat('lolo', 2, 'img', 'meow')
const dog1 = new Dog('lili', 5, 'img', 'woof')
const fih1 = new Fish('Nemo', 3, 'img', 'nemo')

//create HTML file and print the images of each object.

const div1 = document.createElement('div')
document.body.appendChild(div1)
const img1 = document.createElement('img')
img1.src = 'cat.jpg'
img1.id = 'pic1'
div1.appendChild(img1)
img1.style = 'width:60%'


const div2 = document.createElement('div')
document.body.appendChild(div2)
const img2 = document.createElement('img')
img2.src = 'dog.jpg'
img2.id = 'img2'
div2.appendChild(img2)
img2.style = 'width:60%'

const div3 = document.createElement('div')
document.body.appendChild(div3)
const img3 = document.createElement('img')
img3.src = 'nemo.jpg'
img3.id = 'img3'
div3.appendChild(img3)
img3.style = 'width:60%'

//when clicking on the image the details of the animal should show up in a list.

document.getElementById('pic1').addEventListener('click', function() {
    const ul = document.createElement('ul')
    div1.appendChild(ul)
    const li1 = document.createElement('li')
    ul.appendChild(li1)
    li1.innerText = "Name: " +
        cat1.name
    const li2 = document.createElement('li')
    ul.appendChild(li2)
    li2.innerText = cat1.age + " year"

    const li3 = document.createElement('li')
    ul.appendChild(li3)
    li3.innerText = cat1.eats()

    const li4 = document.createElement('li')
    ul.appendChild(li4)
    li4.innerText = cat1.animalsound()
})

document.getElementById('img2').addEventListener('click', function() {
    const ul = document.createElement('ul')
    div2.appendChild(ul)
    const li1 = document.createElement('li')
    ul.appendChild(li1)
    li1.innerText = "Name: " +
        dog1.name
    const li2 = document.createElement('li')
    ul.appendChild(li2)
    li2.innerText = dog1.age + " year"

    const li3 = document.createElement('li')
    ul.appendChild(li3)
    li3.innerText = dog1.eats()

    const li4 = document.createElement('li')
    ul.appendChild(li4)
    li4.innerText = dog1.animalsound()
})


document.getElementById('img3').addEventListener('click', function() {
    const ul = document.createElement('ul')
    div3.appendChild(ul)
    const li1 = document.createElement('li')
    ul.appendChild(li1)
    li1.innerText = "Name: " +
        dog1.name
    const li2 = document.createElement('li')
    ul.appendChild(li2)
    li2.innerText = fih1.age + " year"

    const li3 = document.createElement('li')
    ul.appendChild(li3)
    li3.innerText = fih1.eats()


})