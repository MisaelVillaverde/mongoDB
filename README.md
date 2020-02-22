# MONGODB

![](https://www.dyclassroom.com/image/topic/mongodb/mongodb.jpg)



## Documentación
* [MongoDB Docs](https://docs.mongodb.com)
* [Operators](https://docs.mongodb.com/manual/reference/operator/query/)
* [Update Operators](https://docs.mongodb.com/manual/reference/operator/update/)





## Mostrar Bases de Datos

```js
show dbs
```



## Crear Base de Datos

```js
use mystore
```



## Crear colección

```js
db.createCollection("products")
```



## Insertar un objeto o documento en mongoDB

>Si no existe la colección, esta se crea al insertar 

```js
db.products.insert(
{
    "nombre": "laptop",
    "precio": 40.2,
    "active": true,
    "created_at": new Date("12/12/1999"),
    "somedata": [1, "a", []],
    "factucturer": {
        "name": "dell",
        "version": "xps",
        "location": {
            "city": "usa",
            "address": "asdasd"
        }
    }
})
```



## Insertar múltiples documentos en mongoDB

```js
db.products.insert([
    {
        "name": "mouse",
        "description": "razer mouse",
        "tags": ["computers", "gaming"],
        "quantity": 14,
        "created_at": new Date()
    },
    {
        "name": "monitor",
        "description": "lg monitor",
        "tags": ["computers", "gaming"],
        "quantity": 3,
        "created_at": new Date()        
    }
])
```



## Para buscar, usar:

> > *Ejemplo*

```js
db.products.find({name: "mouse"})
db.products.find({description: "razer mouse"}).pretty()
db.products.find({tags: "computers", name: "monitor"}).pretty()
```

*Especificar q propiedades quieres que salgan*

```js
db.products.find({tags: "computers"}, {name: 1, description: 1, _id: 0})
```



### Para ordenar la búsqueda por orden alfabético

```js
db.products.find({tags: "computers"}).sort({name: 1}).pretty()
```



### Para tener un limite de búsqueda

```js
db.products.find().limit(2).pretty()
```



### Para ver el primer documento que cumple con la condición

```js
db.products.findOne({tags: "computers"})
```



### Saber cuantos documentos tienes

```js
db.products.count()
```



### Se utilizan métodos de JavaScript para buscar, el print es propio del interprete de mongoDB

```js
db.products.find().forEach(product => print("Product Name: " + product.name))

db.products.find().forEach(product => print("Product Price: " + product.price))
```





---
## Actualizar propiedades con el método update

```js
db.products.update({"name": "keyboard"}, {"name": "keyboard", "price": "99.99"})
```
>El primer argumento es de búsqueda, se encuentra la propiedad con el nombre keyboard. El segundo argumento es de reemplazo o de adición en caso de que no exista la propiedad. En este caso lo que se hace es q modifica el objeto por completo, por eso se pone *name: "keyboard"* nuevamente, si no queremos modificarlo por completo existe $set.



**Usando _$set_ para agregar**

```js
db.products.update({"name": "laptop"}, {$set: {"description": "lg gram laptop"}})
```
>_$set_ es usado para indicar que se va a agregar una nueva propiedad, y es útil para no reemplazar todos los datos previos.



**Usando _upsert_ para crear inexistencias**

```js
db.products.update({name: "desktop"}, {$set: {"description": "Gaming Desktop"}}, {upsert: true})
```
>_upsert_ es usado para insertar una propiedad aunque no encuentre ningun documento con la condición. 



**Usando ```$inc``` para incrementar**

```js
db.products.update({"name": "keyboard"}, {$inc: {"price": 0.01}})
```
>_$inc_ es usado para incrementar el valor de un int en la cantidad especificada.
*Si deseas reducir, utilizar numeros negativos*
db.products.update({"name": "keyboard"}, {$inc: {"price": -0.01}})



**Usando _$rename_ para renombrar una propiedad**

```js
db.products.updateMany({}, {$rename: {"name": "nombre"}})
```
>_$rename_ es usado para renombrar una propiedad, en el caso de que queramos renombrar todas las propiedades con el mismo nombre usamos el metodo updateMany con el primer argumento siendo un objeto vacio
*Si queremos solo modificar una propiedad de un objeto en especifico utilizamos*
db.products.update({"name": "laptop"}, {$rename: {"name": "nombre"}})



## Eliminar documentos utilizando remove

```js
db.products.remove({"nombre": "keyboard"})
```



**Usando operadores**

> _Ejemplo_

```js
db.products.remove({price: {$gt: 100}})
```
> El operador [$gt] Funciona para encontrar valores mayores a 100 en este caso



### Eliminar todos los documentos

```js
db.products.remove({})
```





---

# Diccionario

_**Propiedades**_: Datos en los documentos, 
>_Ejemplo_		name: "bach" => {name: "bach"}

_**Documentos**_: Objetos de js, JSON
>{ }

 _**Coleccion**_: Coleccion de Objetos de js, JSON, en SQL llamado tabla

>[ { } ]
