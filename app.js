const express = require('express')
const app = express()

const cats = [
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
  res.send('Welcome to the cat api, meow.')
})

app.get('/breeds', function(req, res) {
  res.send('You hit the /breeds route. Coming soon.')
})

app.get('/breeds/:id', function(req, res) {
  const breedId = req.params.id
  res.send(
    'You hit the /breeds/:id route. Coming soon. The breed id is: ' + breedId
  )
})

app.get('/cats', function(req, res) {
  res.send('You hit the /cats route. Coming soon.')
})

app.get('/cats/:id', function(req, res) {
  const catId = req.params.id
  res.send('You hit the /cats/:id route. Coming soon. The cat id is: ' + catId)
})

app.listen(4000, () => console.log('API is up! MEOW! on port 4000'))
