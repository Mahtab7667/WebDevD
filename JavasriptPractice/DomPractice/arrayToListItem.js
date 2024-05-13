let movies =['pk','dunki','munna bhai mbbs','3idiots',""];
const div=document.getElementById('box');
let mergeItems="";

movies.map((val,index)=>{
    if(val===""){
        console.log(`empty string at:${index} index number`);
    }
    else{
        // // div.textContent Override hoti jayegi new values se.
        // div.innerHTML=`<li>${val}</li>`

        mergeItems=mergeItems+`<li>${val}</li>`;

        // --> ""+<li>pk</li>+<li>dunki</li>+<li>munna bhai mbbs</li>+<li>3idiots</li>.

        // finally in mergeItems="<li>pk</li><li>dunki</li><li>munna bhai mbbs</li><li>3idiots</li>"
    }
})


let orderList = document.createElement('ol');
orderList.innerHTML=mergeItems;

div.appendChild(orderList);
console.log(div);
