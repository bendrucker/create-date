# create-date [![Build Status](https://travis-ci.org/bendrucker/create-date.svg?branch=master)](https://travis-ci.org/bendrucker/create-date) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/create-date.svg)](https://greenkeeper.io/)

> Create a date without using the 'new' keyword

Because this doesn't work:

```js
Date('1-1-2000')
```

## Install

```
$ npm install --save create-date
```


## Usage

```js
var createDate = require('create-date')

createDate('1-1-2000')
//=> Sat Jan 01 2000 00:00:00 GMT-0800 (PST) (Date)
```

## API

#### `createDate(value)` -> `date`

##### value

*Required*  
Type: `string` / `number`

A date string, number, or any other appropriate value to pass to the `Date` constructor.


## License

MIT © [Ben Drucker](http://bendrucker.me)
