
//1.write a function that takes an array and convert nested array into single array
//input:- let arr=[[1,2],[3,4],[5,6],7,[8,9],10];
//Output:- newArray=[1,2,3,4,5,6,7,8,9,10]


// Do all below Questions?
let user=[
    {
        name:'Chombu',
        age:18,
        maritalStatus:'Unmarried',
        gender:'m'
    },
    {
        name:'Tinku',
        age:17,
        maritalStatus:'Unmarried',
        gender:'male'
    },
    {
        name:'Dingi',
        age:20,
        maritalStatus:'married',
        gender:'female'
    },
    {
        name:'Tinki',
        age:19,
        maritalStatus:'Unmarried',
        gender:'female'
    },
    {
        name:'Chombi',
        age:21,
        maritalStatus:'married',
        gender:'female'
    },
    {
        name:'Simba',
        age:23,
        maritalStatus:'married',
        gender:'male'
    },
    {
        name:'Nimba',
        age:17,
        maritalStatus:'married',
        gender:'male'
    },
    {
        name:'Chinki',
        age:13,
        maritalStatus:'married',
        gender:'f'
    }
]


// 1. create a duplicate array?
// 2. Print name and gender of married where age is less then 18
// 3. Print name and age of unmarried?
// 4. If age is greater than 17 then add a property to the object {eligible_for_marriage:'true'}.
// 5. If age is less then 17 then add property to the object {eligible_for_marriage:'false'}
// 6.In object gender is mentioned as "m" and "f"
// change "m" to "male" and "f" to "female"
// 7. Add a function to every object such that whenever we call the function it should print gender("male" and "female" and eligible_for_marriage and name)?
//8. Delete object at 3rd index.


// Question3 write a function that takes an array and create a new array in which duplicated array elements are excluded?

// input:- [1,2,3,4,5,6] and [6,7,8,9,10,5,4]
// output:- [1,2,3,4,5,6,7,8,9,10]

// Question4 write a function that takes an array of numbers and returns the sum of all the even numbers in the array.

// Question5 write a function that takes an array of the numbers and returns the average of all the numbers in the array?

// Question6 Write a function that takes an array of numbers and returns the median of the array(the middle number when the array is sorted)?

// Question7 Write a function to find sum of all even and odd numbers. Print the greatest sum?

// Question8 Find max and min elements in array using reduce method?

// Question9 write a function that splits an array into two arrays?
    // [10,20,30,40,50,60,70,80,90,100]

// Question10 write a program in js to find palindrome number without reversing?

// question11 write a function to reverse an array without using reverse() method

// Question12 Write a function that filters an array of strings and returns a new array containing only strings with a length greater than a specified value.

// Question13 Given an array of objects representing people with firstName and lastName properties, write a function that extracts just the firstName of each person into a new array.
// Input:-                              output:- ['chombu','Tinku']
//  let arr=[{
//     firstName:'Chombu',
//     lastName:'singh'
// },
// {
//     firstName:'Tinku',
//     lastName:'Gupta'
// }
// ]


//Question14 Write a function that flattens a nested array structure into a single array using the reduce method.

// Input:- [1, [2, [3, 4], 5], 6, [7, 8]];
// Output:- [1,2,3,4,5,6,7,8]

// Question15 Given an array of student objects with name,grade,city and cgpa properties, write a function that filters out students with a cgpa lower than a 6?
//print name of topper of state up and Grade?          Answer:- Chirag A+
//Print name of topper in female and CGPA?   Answer:- Varsha 10

// Input:- 
let arr=[{
    name:'Chirag',
    grade:'A+',
    cgpa:'10',
    state:'UP',
    gender:'male'
},
{
    name:'Amit',
    grade:'A',
    cgpa:'9',
    state:'Gujarat',
    gender:'male'
},
{
    name:'Himanshu',
    grade:'B',
    cgpa:'8',
    state:'UP',
    gender:'male'
},
{
    name:'Chombu',
    grade:'C',
    cgpa:'6',
    state:'Delhi',
    gender:'male'
},
{
    name:'Dinga',
    grade:'D',
    cgpa:'5',
    state:'Delhi',
    gender:'male'
},
{
    name:'Dingi',
    grade:'A',
    cgpa:'9',
    state:'Delhi',
    gender:'female'
}]