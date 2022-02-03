const voting =[
    {
        name:'shubham',
        age:21
    },
    {
        name:'aditya',
        age:20
    },
    {
        name:'Raju',
        age:15
    }
];
const voter =voting.filter(person=> person.age>=18); // define the preson
console.log(voter);