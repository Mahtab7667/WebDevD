// 1. Using Normal way
// const button = document.querySelector('button');
// let flag=0;
// const div=document.querySelector('.box');

// button.addEventListener('click',()=>{
//     if(flag===0){
//         div.style.backgroundColor='#04a2ee';
//         div.style.border='none';

//         button.textContent='Light';
//         flag++;
//     }
//     else{
//         div.style.backgroundColor='white';
//         button.textContent='Dark';
//         flag=0;
//     }

// })







// 2. Using classList
const button=document.querySelector('button');

button.addEventListener('click',()=>{
    // i. first thing happen on first click.
    const div = document.querySelector('div');
    div.classList.toggle('one');
    console.log(div);

    // ii. second thing happen on click.
    button.classList.toggle('light');
    console.log(button);

    // cant change textContent from css so we do this usig js
    if(button.classList.contains('light')){
        button.textContent='Light';
    }
    else{
        button.textContent='dark';
    }
});