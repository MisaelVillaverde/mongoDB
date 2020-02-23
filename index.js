const fs = require('fs')

var rawdata = fs.readFileSync('mystore.json')
var products = JSON.parse(rawdata) // products es un array of objects [i][i]

function priceDefined(product) {
    if (typeof product.price === 'undefined') {
        return "Precio Indefinido"
    } else {
        return product.price.$numberInt
    }
}

products.forEach(product => console.log(`Product Name: ${product.name}          Product Price: ${priceDefined(product)}`))
