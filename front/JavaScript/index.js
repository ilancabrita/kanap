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

function product()
{
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))

    for (let i=0; i<data.length; i=i+1);
    {
    
      displayInfromation("imageUrl", "imageUrl")
      displayInfromation("altTxt", "altTxt")
      displayInfromation("name", "name")
      displayInfromation("description", "description")
      displayInfromation("colors", "colors")
      displayInfromation("price", "price")
    
      function displayInfromation(id, data)
      {
        document.getElementById(id).innerHTML = data[i]._id
      
    
        document.getElementById("imageUrl").innerHTML= data[i]._id
        document.getElementById("altTxt").innerHTML= "altTxt"
        document.getElementById("name").innerHTML= "name"
        document.getElementById("description").innerHTML= "description"
        document.getElementById("colors").innerHTML= "colors"
        document.getElementById("price").innerHTML= "price"
    }
    }
    
}


product();

