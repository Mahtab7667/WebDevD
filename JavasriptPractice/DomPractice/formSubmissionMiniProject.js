// 1. new row element creation
// 2. inside new row adding 4 td using innerhtml.
// 3. append inside table.

const login=document.getElementById('login');
let count=0;

login.addEventListener('click',(eventObject)=>{
    eventObject.preventDefault();
    count++;

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const pass = password.padStart(10,'*');

    const newRow=document.createElement('tr');

    newRow.innerHTML=`<td>${count}</td>
                      <td>${name}</td>
                      <td>${email}</td>
                      <td>${pass}</td>`;

    const table=document.getElementById('table');
    table.appendChild(newRow);
})