

let usrname = 'AbdAlrazzaq';
let age = '28';
const myhtml = `
<div class="card">
<h2 class="name">${usrname}</h2>
<span class="age">${age}</span>
</div>
`;
//console.log(myhtml);
document.body.innerHTML = myhtml



let array1 = [1,2,3];
let array2 = [4,5];

console.log(array1.concat(array2));

let allarry = [...array1, ...array2];
console.log(allarry);

function sum(x, y, z) {
    return x + y + z;
}
const mynumbers = [1,2,3];

console.log(mynumbers);
console.log(...mynumbers);
console.log(sum(...mynumbers));



let  array5 = [1,2,3,...array4,6,7];
console.log(array5);

//[1]
let array6 = [1,2,3];
let array7 = array6;
console.log(array6);
console.log(array7);

//[2]
let array3 = [1,2,3];
let  array4 = [...array3];
array2.push(66);
console.log(array3);
console.log(array4);


//[3]
let array8 = [79,55,89,48,36,63];
console.log(Math.min(...array8));


//[1]
function  myfun1(usrname, role, theme){
  return `Hello ${usrname} your role is: ${role}, website theme is: ${theme}`;
}
console.log(myfun1('Abd-Alrazzaq', 'Admin', 'Blue'));



//[2]
function  myfun2(usrname, role, theme){
    usrname = usrname === undefined ? 'Default user':usrname;
    role = role === undefined ? 'Default role':role;
    theme = theme === undefined ? 'Default theme':theme;
    return `Hello ${usrname} your role is: ${role}, website theme is: ${theme}`;
  }
  console.log(myfun2('Abd-Alrazzaq', 'Admin', 'Blue'));

//[3]
  function  myfun3(usrname, role, theme){
    usrname = usrname === undefined ? 'Default user':usrname;
    role = role === undefined ? 'Default role':role;
    theme = theme === undefined ? 'Default theme':theme;
    return `Hello ${usrname} your role is: ${role}, website theme is: ${theme}`;
  }
  console.log(myfun3());
  console.log(myfun3('Ahmed'));
  console.log(myfun3('Ahmed', 'admin'));
  console.log(myfun3('Ahmed', 'admin', 'green'));



//[4]
  function  myfun3(usrname, role, theme){
    usrname = usrname || 'Default user';
    role = role || 'Default role';
    theme = theme || 'Default theme';
    return `Hello ${usrname} your role is: ${role}, website theme is: ${theme}`;
  }
  console.log(myfun3());
  console.log(myfun3('Ahmed'));
  console.log(myfun3('Ahmed', 'admin'));
  console.log(myfun3('Ahmed', 'admin', 'green'));
  

  //[5]
  function myfun4(usrname = 'default user', role = 'default role', theme = 'default theme'){
      return `Hello ${usrname} your role is: ${role}, website theme is: ${theme}`
  }
  console.log(myfun4());
  console.log(myfun4('Ahmed'));
  console.log(myfun4('Ahmed', 'admin'));
  console.log(myfun4('Ahmed', 'admin', 'green'));
