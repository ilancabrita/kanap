//import { find , findById , product } from 'Product.js';
//let val = find();
//let val = findById();
let val = product();

console.log("hello")

function find()
{
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
}

function findById()
{
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
}

var items = document.getElementById("items")

function product()
{
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))

  var clone = document.getElementById('items')

  for (let i=0; i<data.length; i=i+1)
  {    
    function displayInfromation(id, data)
    {
      document.getElementById(id).innerHTML = data[i]._id
      
      document.getElementById("imageUrl").innerHTML= data[i].imageUrl;
      document.getElementById("altTxt").innerHTML= data[i].altTxt;
      document.getElementById("name").innerHTML= data[i].name;
      document.getElementById("description").innerHTML= data[i].description;
      document.getElementById("colors").innerHTML= data[i].colors;
      document.getElementById("price").innerHTML= data[i].price;
    }
  }
}

product();