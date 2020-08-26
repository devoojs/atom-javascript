
function myfun(){
  let x = 1 ;
     if (true){
     let x = 2;
     console.log(x);
     }
  console.log(x);
  return 'done';
}
console.log(myfun());



const SETTINGS = 1;
if (true) {
  const SETTINGS = 2;
  console.log(SETTINGS);
}
console.log(SETTINGS);



const SETTINGS = [];
SETTINGS.push('html', 'css', 'javascript');
console.log(SETTINGS);



const SETTINGS = {
  'name' : 'AbdAlrazzaq',
  'age' : '28',
};
//SETTINGS.name = 'ahmed';
console.log(SETTINGS);



let myfun1 = () => 1;
let myfun2 = _ => 2;
let myfun3 = (parameter) => parameter * 3;
let myfun4 = (parameter1, parameter2) => parameter1 + parameter2;

console.log(myfun1());
console.log(myfun2());
console.log(myfun3(3));
console.log(myfun4(4, 4));


let test = () => document.getElementById('show').innerHTML = this;
window.onload = test;
document.getElementById('btn').addEventListener('click', test);


//[1]
function myfun5(){
    this.age = 0;
    setInterval(function(){
        this.age++;
        console.log(this.age);
    },1000);
}

let usr = new myfun5();


//[2]
function myfun6(){
    let mythis = this;
    this.age = 0;
    setInterval(function(){
        mythis.age++;
        console.log(mythis.age);
    },1000);
}
let usr = new myfun6();


//[3]
function myfun7(){

    this.age = 0;
    setInterval(() => {
        this.age++;
        console.log(this.age);
    },1000);
}
let usr = new myfun7();

//Hiiii fork