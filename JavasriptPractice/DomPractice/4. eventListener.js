const button= document.querySelector('button');

// 2. start
// as a js property.(use "on" as a prefix of eventName) :-
button.onclick=()=>{
        document.body.style.backgroundColor='red';
    }; 


//  button.ondblclick=dblclickReaction;
// // const dblclickkReaction=()=>{
// //     document.body.style.backgroundColor='white';
// // }; ---> not work(arrow function)

// function dblclickkReaction(){
//     document.body.style.backgroundColor='white';
// }



// end----------------------

// 3. 
// using addEventListener(no need to write prefix 'on') :-

// button.addEventListener('click',()=>{
//     console.log('this is performed by addEventListener()');
//     document.body.style.backgroundColor='red';------->work here(array function cause we are writing definition directly)
// });


button.addEventListener('dblclick',dblReaction);

// const dblReaction=()=>{
//     document.body.style.backgroundColor='white';
// } ---------not work

function dblReaction() {
    document.body.style.backgroundColor='white';
}
