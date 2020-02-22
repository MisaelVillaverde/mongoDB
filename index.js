const fs = require('fs')

var rawdata = fs.readFileSync('mystore.json')
var products = JSON.parse(rawdata) // products es un array of objects [i][i]

products.forEach(product => console.log("Product Name: " + product.name))
