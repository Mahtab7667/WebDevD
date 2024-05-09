// --> four pillers of 
// 1. element selection 
// 2. changing html
// 3. changing css
// 4. eventlistener


// //1.
// const a = document.querySelector("h1")
// //2.
// a.innerHTML="html changed"
// //3.
// a.style.backgroundColor="#000"

// //4.
// a.addEventListener("click",function(){
//     a.style.backgroundColor="green"
//     console.log("background changed");
// })


// making a bulb
const blb= document.querySelector("#bulb")
const btn = document.querySelector("button")

let flag=1;

btn.addEventListener("click",function(){
    if(flag%2==0){
        blb.style.backgroundColor="grey";
        console.log("bulb is of");
        flag++;
    }
    else{
        blb.style.backgroundColor="yellow";
        console.log("bulb is on");
        flag++;
    }
})
