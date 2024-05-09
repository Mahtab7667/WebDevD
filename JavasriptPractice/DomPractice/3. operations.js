// creation of element
const para = document.createElement('p');
para.textContent='para3 created using javascript';
console.log(para);


// adding element 
// 1. adding element at last position

const div=document.querySelector('div');
// div.appendChild(para);

// console.log(div);

// 2. adding element at specific position
div.insertAdjacentElement('afterbegin',para);
// console.log(div);




// changing inside content
// 1. textContent :- it only change or add content.
para.textContent='<b>previous text(para3 created using javascript), now i am updated to implement change content operation</b>';

// 2. innerHtml :- it can add text as well as element also.
para.innerHTML="<b>previous text(para3 created using javascript), now i am updated to implement change content operation</b>"


