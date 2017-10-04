# My Little Cat API

## Introduction

## Getting Started

Welcom to the internal API team. As a developer on the team (not a public developer) use the instructions below to clone the repo, install dependencies, and start the API.

```
$ git clone https://github.com/curreythomas/my-little-cat-api.git
$ cd my-little-cat-api
$ npm install
$ npm start
```
## Endpoints

### `/`

Returns a welcome message including a link to the repo and API documentation on GitHub.

### Get all the cats - `/cats`

Retrieves a collection of cats.

```
GET /cats
```

Response 200

```
[
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
}, ... remaining cats omitted for brevity
]
```


### Get a cat - `/cats/{id}`

Retrieves a single cat resource from the collection of cats.

```
GET /cats/Felix
```

Response 200

```
{
  id: 'Felix',
  type: 'cat',
  name: 'Felix',
  breed: 'minx',
  owner: 'George Jefferson',
  age: 10
}
```

### Get all the breeds - `/breeds`

Retrieves a collection of breeds.

```
GET /breeds
```

Response 200

```
[
{ id: 'tabby', type: 'breed', description: 'A great breed.' },
{ id: 'siamese', type: 'breed', description: 'The enemy of tabbies.' },
{ id: 'maine coon', type: 'breed', description: 'A big soft breed of cat.' },
... remaining breeds omitted for brevity
]
```

### Get a breed - `/breeds/{id}`

Retrieves a single breed resource from the collection of breeds.

```
GET /breeds/minx
```

Response 200

```
{ id: 'minx', type: 'breed', description: 'a crazy koo-koo breed of cat.' }
```
