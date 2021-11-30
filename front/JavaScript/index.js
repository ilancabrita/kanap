import { find , findById , product } from 'Product.js';
let val = find();
let val = findById();
let val = product();

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

function product()
{
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
}

import.getAllProducts

for (let items=0; items<url.length; items=items+1);
{
  const product = 

  displayInfromation("imageUrl", "imageUrl")
  displayInfromation("altTxt", "altTxt")
  displayInfromation("name", "name")
  displayInfromation("description", "description")
  displayInfromation("colors", "colors")
  displayInfromation("price", "price")

  function displayInfromation(id, value)
  {
    document.getElementById(id).innerHTML = value
  }

/*  document.getElementById("imageUrl").innerHTML= "imageUrl"
  document.getElementById("altTxt").innerHTML= "altTxt"
  document.getElementById("name").innerHTML= "name"
  document.getElementById("description").innerHTML= "description"
  document.getElementById("colors").innerHTML= "colors"
  document.getElementById("price").innerHTML= "price" */
}