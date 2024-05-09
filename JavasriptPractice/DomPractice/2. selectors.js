const para=document.getElementsByClassName('para')

// console.log(para)

// 1. normal access :- (basically we are selecting each item of html collection indirectly , without using eny selector, but using these we can modify,update and delete elements also like normal selector that shown in ii way example.)
// a. On htmlcollection

// i. first way (by jero based index)
const firstelement=para[0];
// console.log(firstelement);

//ii. second way (using attribute and namedItem Property)
const secondpara=para.namedItem('one');
// console.log(secondpara);
// or
const thirdpara=para.namedItem('thirdpara');
thirdpara.textContent='hello i am third para and i am modified after selected through namedItem property';
// console.log(thirdpara);




// b. On NodeList
// i. first way
const para1=document.querySelectorAll('.para');
// console.log(para1);

const firstElementAccess=para1[0];
// console.log(firstElementAccess);
firstElementAccess.textContent="i am paragraph one, i am changed in nodelist 1st way of normal access";

// ii. in nodelis , namedItem property not work. so we have only one way to access element in normal case of nodelist.





// 2. Access Through Loop
// a. on Htmlcollection :-array methods not work here like, map filter,reduce,etc.
//  but if we still wanr then we can use 'for....of' statement. it is not a loop.

// for (items of para1){
//     console.log(items);
// }


// b. on NodeList :- here we can use only one array method which is forEach(). and for...of statement also can applicable.

// para1.forEach(val=>{
//     console.log(val);
// })

// or try to apply for...of
// for(elements of para1){
//     console.log(elements);
// }


// para1.map(val=>{
//     console.log(val);
// }) --- do not work.










