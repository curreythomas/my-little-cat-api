const express = require('express')
const app = express()
const R = require('ramda')

const database = [
  { id: 'tabby', type: 'breed', description: 'A great breed.' },
  { id: 'siamese', type: 'breed', description: 'The enemy of tabbies.' },
  { id: 'maine coon', type: 'breed', description: 'A big soft breed of cat.' },
  { id: 'minx', type: 'breed', description: 'a crazy koo-koo breed of cat.' },
  {
    id: 'Felix',
    type: 'cat',
    name: 'Felix',
    breed: 'minx',
    owner: 'George Jefferson',
    age: 10
  },
  {
    id: 'Tootles',
    type: 'cat',
    name: 'Tootles',
    breed: 'tabby',
    owner: 'Trip Ottinger',
    age: 15
  },
  {
    id: 'Abby',
    type: 'cat',
    name: 'Abby',
    breed: 'siamese',
    owner: 'Sam Hunt',
    age: 3
  },
  {
    id: 'Garfield',
    type: 'cat',
    name: 'Garfield',
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
  //const breedsFilter = filter((breeds = item => item.type === 'breed'), database)
  const breedsFilter = R.filter(R.propEq('type', 'breed'), database)
  const idFilter = item => item.id === req.params.id
  res.send(R.find(idFilter, breedsFilter))
})

app.get('/cats', function(req, res) {
  const catFilter = item => item.type === 'cat'
  res.send(R.filter(catFilter, database))
})

app.get('/cats/:id', function(req, res) {
  const catId = req.params.id
  res.send('You hit the /cats/:id route. Coming soon. The cat id is: ' + catId)
})

app.listen(4000, () => console.log('API is up! MEOW! on port 4000'))
