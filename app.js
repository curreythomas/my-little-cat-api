const express = require('express')
const app = express()
const R = require('ramda')

const database = [
  { id: 'tabby', type: 'breed', description: 'A great breed.' },
  { id: 'siamese', type: 'breed', description: 'The enemy of tabbies.' },
  { id: 'maine coon', type: 'breed', description: 'A big soft breed of cat.' },
  { id: 'minx', type: 'breed', description: 'a crazy koo-koo breed of cat.' },
  {
    id: 'felix',
    type: 'cat',
    name: 'felix',
    breed: 'minx',
    owner: 'George Jefferson',
    age: 10
  },
  {
    id: 'tootles',
    type: 'cat',
    name: 'tootles',
    breed: 'tabby',
    owner: 'Trip Ottinger',
    age: 15
  },
  {
    id: 'abby',
    type: 'cat',
    name: 'abby',
    breed: 'siamese',
    owner: 'Sam Hunt',
    age: 3
  },
  {
    id: 'garfield',
    type: 'cat',
    name: 'garfield',
    breed: 'maine coon',
    owner: 'Nancy Higgins',
    age: 6
  }
]

app.get('/', function(req, res) {
  res.send(`<html>
    <body>
      <h1>CATS API, MEOW!</h1>
    </body>
    <hr/>
    <a href ="https://github.com/curreythomas/my-little-cat-api.git">Documentation</a>
    </html>`)
})

app.get('/breeds', function(req, res) {
  // send a colection of breeds from the 'database'.
  //filter the breeds from the rest of the info in the 'database'.
  const breeds = item => item.type === 'breed'
  res.send(R.filter(breeds, database))
})

app.get('/breeds/:id', function(req, res) {
  const breedsFilter = R.filter(R.propEq('type', 'breed'), database)
  const idFilter = item => item.id === req.params.id
  res.send(R.find(idFilter, breedsFilter))
})

app.get('/cats', function(req, res) {
  const catFilter = item => item.type === 'cat'
  res.send(R.filter(catFilter, database))
})

app.get('/cats/:id', function(req, res) {
  const catFilter = R.filter(R.propEq('type', 'cat'), database)
  const idFilter = item => item.id === req.params.id
  res.send(R.find(idFilter, catFilter))
})

app.listen(4000, () => console.log('API is up! MEOW! on port 4000'))
