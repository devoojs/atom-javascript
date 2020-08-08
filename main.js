
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




const SETTINGS = {
  'name' : 'AbdAlrazzaq',
  'age' : '28',
};
object.freeze(SETTINGS);
SETTINGS.name = 'Ali';
console.log(SETTINGS);




let array1 = [1,2,3];
let  array2 = [...array1];
array2.push(66);
console.log(array1);
console.log(array2);




let  array3 = [1,2,3,...array2,6,7];
console.log(array3);




function  myfun(usrname, pasword, url){
  return `Hello ${usrname} how ar you ${pasword} wat linl ${url}`;
}
console.log(myfun('Abd', 'a123', 'www'));

