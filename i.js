const chair = {
    legs: 4,
    hasWheels: true,
    material: ["plastic", "leather"],
    adjustHeight: function () {
      return "the height is adjusted";
    },
    showDescription: function () {
      // this refers the object calling the method
      return this.legs;
    },
  };
  
  // dot notation
  chair.legs;
  
  // bracket notation
  chair["legs"];
  
  // dealing with variables
  const someVar = "hasWheels";
  
  chair.someVar; // -> undefined
  chair[someVar]; // -> true
  
  // reassign values
  chair.legs = 5;
  
  function makeChair(legs, hasWheels, material) {
    return {
      legs: legs,
      hasWheels: hasWheels,
      material: material,
      adjustHeight: function () {
        return "the height is adjusted";
      },
      showDescription: function () {
        // this refers the object calling the method
        return this.legs;
      },
    };
  }
  
  const chair1 = makeChair(8, true, "iron");
  const chair2 = makeChair(3, false, "wood");
  
  function car(year, brand, wheels) {
    this.year = year;
    this.brand = brand;
    this.wheels = wheels;
  }
  // similar to above but can be used without the `new` keyword
  // function car1 (year, brand, wheels) {
  //   const newCar = {}
  //   newCar.year = year
  //   newCar.brand = brand
  //   newCar.wheels = wheels
  //   return newCar
  // }
  
  const car1 = new car(1999, "toyota1", 4);
  const car2 = new car(1992, "toyota2", 4);
  const car3 = new car(1993, "toyota3", 4);
  const car4 = new car(1992, "toyota4", 4);
  
  const cars = [car1, car2, car3, car];
  
  let oldest = Infinity; // 1992
  const oldestCars = [];
  
  cars.forEach(function (element) {
    if (oldest >= element.year) {
      oldest = element.year;
    }
  });
  
  cars.forEach(function (element) {
    console.log("year: " + element.year + " brand: " + element.brand);
    if (element.year === oldest) {
      oldestCars.push(element);
    }
  });
  
  console.log(oldestCars);
  console.log(oldest.year);
  
  const users = [
    {
      name: "John",
      age: 21,
    },
    {
      name: "Jane",
      age: 22,
    },
    {
      name: "Mark",
      age: 20,
    },
    {
      name: "Smith",
      age: 24,
    },
  ];
  
  function populateUsers() {
    const usersDiv = document.querySelector("#users");
  
    usersDiv.innerHTML = "";
  
    const ul = document.createElement("ul");
  
    users.forEach(function (user) {
      const li = document.createElement("li");
      li.innerText = user.name;
  
      li.addEventListener("click", function (e) {
        alert(user.name + " is " + user.age + " years old");
      });
      ul.append(li);
    });
  
    usersDiv.append(ul);
  }
  
  populateUsers();
  
  function addUser(){
    const name = document.querySelector('#name').value
    const age = document.querySelector('#age').value
  
    const user = {
      name: name,
      age: age
    }
  
    users.push(user)
  
    // select the ul
    // create li
    // add text to li
    // add event listener to li
    // append li to ul
    populateUsers();
  }
  
  // classes
  
  class Person  {
    constructor(first, last, age) {
      this.name = {
        first,
        last
      };
      this.age = age;
    }
  
    greeting() {
      console.log(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
  }
  
  const person1 = new Person("John", "Doe", 20)
  
  class Teacher extends Person {
    constructor(first, last, age, subject, grade) {
      super(first, last, age)
      this.subject = subject;
      this.grade = grade;
    }
  
    teach(){
      console.log("blah blah blah")
    }
  
    giveHomeWork(){
      console.log("homework is due by tomorrow")
    }
    
    greeting() {
      console.log(`Hi! I'm ${this.age}`);
    };
  }
  
  
  const teacher1 = new Teacher("Jane", "Doe", 20, "math", "first")
  
  
  