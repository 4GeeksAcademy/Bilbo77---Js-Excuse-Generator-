/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#btn-excuse").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generatorExcuse();
  });
};

let generatorExcuse = () => {
  
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

 /* let whoElement = Math.floor(Math.random() * who.length);
  let actionElement = Math.floor(Math.random() * action.length);
  let whatElement = Math.floor(Math.random() * what.length);
  let whenElement = Math.floor(Math.random() * when.length);

  return who[whoElement] + ' ' + action[actionElement] + ' ' + what[whatElement] + ' ' + when[whenElement];
*/
  
let newArray = [who, action, what, when];

let arrayDeExcusas = newArray.map((elementoDelArray) => {
return elementoDelArray[Math.floor(Math.random() * elementoDelArray.length)];
})

return arrayDeExcusas.join(' ');

}