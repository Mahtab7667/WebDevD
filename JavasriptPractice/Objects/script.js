// 1.example
// mysym= Symbol("key1")

// let obj={
//     name:"golu",
//     age:20,
//     [mysym]:"mykey1"
// }

// console.log(obj);
// console.log(typeof obj[mysym]);
// console.log(obj[mysym]);

// 2.Example
// let phone=8809;
// let obj={
//     phone,
//     name:"golu"
// }

// console.log(obj["phone"]);

// 3. refrence reson (tricky question)
// let obj = {
//     a:10
// }
// console.log(obj)
// obj.a = 5;
// console.log(obj)

// 4. same refrence reason (tricky question)
// let arr = [1,2,3];
// console.log(arr)
// arr[0] = 50
// console.log(arr)

// 5.Example
// let key=prompt("enter a key");
// let value=prompt("enter a value");

// let obj={
//     [key]:value
// }

// console.log(obj.key);

// 6. Example Taking multiple input from user 
// let num=+prompt("enter no of pair")

// let obj={};
// for(let i=1;i<=num;i++){
//     let key=prompt(`enter your ${i} key`)
//     let value=prompt(`enter your ${i} value`)

//     // obj.key=value;
//     obj[key]=value;
// }

// console.log(obj);

// 7. Example value adding
let animal={}
animal.name='horse';
animal.color='black';
animal['breed']='Paltu';
console.log(animal);


