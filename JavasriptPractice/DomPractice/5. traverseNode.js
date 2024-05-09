// traverse node and remove element
const para = document.getElementById('one')
const firstPara=document.getElementById('firstPara')
const parent=document.querySelector('div')

// 1. parentElement
const parentElement=para.parentElement;
console.log(parentElement);

// 2. previousElementSibling
const previousElementSibling=para.previousElementSibling;
console.log(previousElementSibling);

// 3. nextElementSibling
const nextElementSibling=para.nextElementSibling;
console.log(nextElementSibling);

// 4. children(return HTMLcollection)
// const childCollection = parent.childrens;
// console.log(childCollection);

console.log(parent.children);

// 5. childnodes(return NodeList)
const childCollection = parent.childNodes;
console.log(childCollection);

// removing element(deleting first paragraph)
firstPara.remove()


