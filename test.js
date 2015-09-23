'use strict'

var test = require('tape')
var createDate = require('./')

test(function (t) {
  t.ok(createDate('1-1-2000') instanceof Date)
  t.end()
})
