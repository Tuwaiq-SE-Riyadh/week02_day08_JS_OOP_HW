class Animal{ constructor(_name){
 this.nameani = _name;

 } get wheels(){

 return this.nameani; 
} set wheels(_name){ this.nameani = _name;
 }

 static accelerate(){ 
 document.write('eats : <br>'); 
} 
 
}

 let a1 = new Animal();
a1.wheels = 'Cat ';

let a3 = new Animal();
a3.wheels = 'Fish ';


function catt(){

document.getElementById('h1').innerHTML=a1.wheels;

 Animal.accelerate();
 

 class cats extends Animal{ 
 constructor(_name, _food,_nam, _age, _sound){ 
 super(_name); 
 this.nam = _nam;
 this.food = _food; 
 
this.age = _age;

 this.sound = _sound; }
 info(){
 
  document.write( this.food,'<br> name is :<br> ',this.nam,' <br>its age is : <br>' ,this.age, '<br> his sound is :<br> ', this.sound);
  
   }}
    let cat = new cats( 1,' Muose',' Tom', 4, "Meow");
   
    cat.info();
  
    }
 
 document.write('<br>');
 let a2 = new Animal();
a2.wheels = 'Dog ';


function dogg(){

document.getElementById('h1').innerHTML=a1.wheels;
document.write(a2.wheels+':-<br>');

 class dog extends Animal{ 
 constructor(_name, _food, _age, _sound,){ 
 super(_name); 
 this.food = _food; 
 
this.age = _age;

 this.sound = _sound; 

 }
 info(){
  document.write('name is:<br>', this.wheels,'<br>','it eat :<br>',this.food,' its age is :  <br>' ,this.age, ' <br>his sound is : <br>', this.sound,'<br>');
  
   }}
    let d1 = new dog( 'Betshoof','  Chichen<br>', 4, "Woof ");
    d1.info();
    
      let d2 = new dog('Camntoo','  Chichen<br>', 4, "Woof ");
    d2.info();
   }
 
 
 
 
 
 
 
 
 
 
 
 document.write('<br>');
 


function fishh(){

document.write(a3.wheels+':-<br>');
Animal.accelerate();
 class fish extends Animal{ 
 constructor(_name, _food,_color){ 
 super(_name); 
 this.food = _food; 

 
 this.color = _color; 
 
 }
 infof(){
  document.write( this.food,'<br> his color is :<br>',this.color);
  
   }}
    let f = new fish( 1,' Fish'," property");
    f.infof();
 
 }
 
    