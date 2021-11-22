import { find , findById , product } from 'Product'
let val = find();
let val = findById();
let val = product()

function find()
{
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
}

function findById(id)
{
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
}

function product()
{
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
}