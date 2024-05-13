// 4. find perfect number 
// let num=+prompt("enter your number");
// let sum=0;
// for(let i=1;i<num;i++){
//     if(num%i==0){
//         sum=sum+i;
//     }
// }
// if(sum===num){
//     console.log("it is perfect number");
// }
// else{
//     console.log("not a perfect number");
// }

// ------------------------***--------------------------- 

// 5. sum of square of 100 natural numbers 
// let sum=0;
// let i=1;
// while(i<=100){
//     let pow = i * i;
//     sum=sum+pow;
//     i++;
// }
// console.log(sum);


// 6. reverse the digit 
// let num=+prompt("enter a number");
// let ans=0;
// for(num;num!==0;num=Math.floor(num/10)){
//     ans=ans*10+num%10;
// }
// console.log(ans);



// 7. sum of factors of a number 
// let num=+prompt("enter a number");
// let sum=0;
// for(let i=1;i<=num;i++){
//     if(num%i===0){
//         sum=sum+i;
//     }
// }
// console.log(sum);


// 8. wajsp to find armstrong number 
// let num=+prompt("enter a number");
// let sum=0;
// let temp=0;
// let cube=0;
// for(num;num!==0;num=Math.floor(num/10)){
//     temp=num%10;
//     cube=temp**3;
//     sum=sum+cube;
// }
// console.log(sum);



// 9. wajsp to find strong number 
// let num=+prompt("enter number");
// let temp=0;
// let sum=0;
// let fact=1;
// let compareAfterLoop=num;
// for(num;num!==0;num=Math.floor(num/10)){
//     temp=num%10;
//     for(let i=1;i<=temp;i++){
//         fact=fact*i;
//     }
//     sum=sum+fact;
//     fact=1;
// }
// if(sum===compareAfterLoop){
//     console.log("it is an strong  number");
// }
// else{
//     console.log("it is not an strong number");
// }



// 10. prime num b/w 1 to 100 
// let arr = [];
// for(let i=1;i<=100;i++){
//     let count=0;
//     if(i==0 || i==1)
//         {
//             continue;
//         }
//     else if(i===2){
//         arr.push(i);
//     }
//     else{
//         for(let j=2;j<=i;j++){
//             if(count>1){
//                 break;
//             }
//             if(i%j===0){
//                  count++;
//             }
//         }
//         if(count == 1) 
//             arr.push(i);  
//     }
// }
// console.log(arr);

// another way
// for(let i=1;i<=100;i++){
//     let count=0;
//     if(i==0 || i==1)
//         {
//             continue;
//         }
//     else if(i===2){
//         console.log(i);
//     }
//     else {
//         for(let j=2;j<i;j++){
//             if(i%j===0){
//                 j=i;
//             }
//             else{
//                 if(j===i-1){
//                     console.log(i);
//                 }
//             }
//         }
        
//     }
// }



// 11. perfect Number between 1 to 100
// for(let i=1;i<=100;i++){
//     let factSum=0;
//     for(let j=1;j<i;j++){
//         if(i%j==0){
//             factSum=factSum+j;
//         }
//     }
//     if(factSum==i){
//         console.log(i);
//     }
// }



// 12. strong number between 1 to 500 
// for(let i=1;i<=500;i++){
//     let temp=0;
//     let sum=0;
//     let icopy=i; // take a temp variable to copy i value , otherwise i value get modified in inner loop and becomes zero and outer loop make i++ on i and it becomes 1 and this will continue till infinity.
//     for(icopy;icopy!==0;icopy=Math.floor(icopy/10)){
//         let fact=1;
//         temp=icopy%10;
//         for(let j=1;j<=temp;j++){
//             fact=fact*j;
//         }
//         sum=sum+fact;
//     }
//     if(sum===i){
//         console.log(i);
//     }
// }



// 13. Armstrong number between 1 to 500 
// for(let i=1;i<=500;i++){
//     let i1copy=i;
//     let temp=0;
//     let cube=0;
//     let sum=0;
//     let count=0;
//     for(i1copy;i1copy!==0;i1copy=Math.floor(i1copy/10)){
//         count++;
//     }
//     let i2copy=i;
//     for(i2copy;i2copy!==0;i2copy=Math.floor(i2copy/10)){
//         temp=i2copy%10;
//         cube=temp**count;
//         sum=sum+cube;
//     }
//     if(sum===i){
//         console.log(i);
//     }
// }


// 14. sum of cube of 100 natural numbers
// let sum=0;
// for(let i=1;i<=100;i++){
//     sum=sum+i**3;
// }
// console.log(sum);


// 15. Palindrome number between 1 to 500 
// for(let i=1;i<=500;i++){
//     let i1copy=i;
//     let temp=0
//     let ans=0;
//     for(i1copy;i1copy!==0;i1copy=Math.floor(i1copy/10)){
//                 temp=i1copy%10;
//                 ans=ans*10+temp;
//      }
//      if(ans===i){
//         console.log(ans);
//      }
// }


// 16. count even digit in any number 
// let num=+prompt("enter your number");

// let temp=0;
// let count=0;
// for(num;num!==0;num=Math.floor(num/10)){
//     temp=num%10;
//     if(temp%2===0){
//         count++;
//     }
// }
// console.log(count+': number of even digit present in given number');



// 17. fibbonacci series upto 50 
// let result=0;
// let prev=0;
// let curr=1;
// console.log(prev);
// console.log(curr);
// for(let i=3;i<=50;i++){
//     result=curr+prev;
//     console.log(result);
//     prev=curr;
//     curr=result;
// }


// 18. swap two variable without taking temp variable 
// let a=5;
// let b=6;

// a= a+b;
// console.log(a);
// console.log(a-b);
// b=a-b;
// console.log(b);
// a=a-b;
// console.log(a);
// console.log(`so now value of a:${a} and value of b:${b}`);


// 19. pattern

// --->steps for solving CanvasPattern<---
// 1. recognise no. of row 
// 2. how many column in each row, make a pattern like when its row 2 then there is 4 column.
// 3. what to print , * or any number or any alphabet.
// note- try to draw the formula for rows or column.

//    *
//   ***
//  *****
// *******
// for(let row=1;row<=4;row++){
//     let totalCols=0;
//     let result='';
//    for(let sp=1;sp<=4-row;sp++){
//     result+=' ';
//    }
//    totalCols=row+(row-1);
//    for(let str=1;str<=totalCols;str++){
//     result+='*';
//    }
//    console.log(result);
// }


// 20.  
//       1
//     1 2 1
//   1 2 1 2 1
// 1 2 1 2 1 2 1
// for(let row=1;row<=4;row++){
//         let totalCols=1;
//         let result='';
//        for(let sp=1;sp<=4-row;sp++){
//         result+=' ';
//        }
//        totalCols=row+(row-1);
//        for(let numpattern=1;numpattern<=totalCols;numpattern++){
//         if(numpattern%2===0){
//             result+='2';
//         }
//         else{
//             result+='1';
//         }
//        }
//        console.log(result);
//     }