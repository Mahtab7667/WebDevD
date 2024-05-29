// 1st way of importing named export
// import {a} from "./india.js";

// console.log(a);

// 2nd way importing named export(import multiple data at once)
// import {food,a} from "./india.js";

// console.log(food);
// console.log(a);
// console.log(food);



// only 1st way of importing named export
import value from "./india.js";
console.log(value);
console.log(value.a);//to access value of object value that comes from india.js

let {a,b}=value;
console.log(b);
console.log(a);
