const product =[
{
    name:'laptop',
    price:10000,
    count:5
},
{
    name: 'destop',
    price: 5000,
    count: 2 
},
{
    name:'phone',
    price:15000,
    count:2 
}
]
const totalproduct = product.map(item =>({
    name: item.name,
    totalvalue : item.price*item.count
}));
console.log(totalproduct);