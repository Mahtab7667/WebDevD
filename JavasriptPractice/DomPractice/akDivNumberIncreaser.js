// to show increasing number inside div i can use,
// 1. i have to create any element like paragraph and then this count add in that.
// 2. or i can also simple add this increasing number using textContent.
const div=document.getElementById('box');
let count=0;

    const intervalId=setInterval(()=>{
        count++;
        div.textContent=`${count}`
    
        if(count>=15){
            clearInterval(intervalId);
        }
     },1000);


