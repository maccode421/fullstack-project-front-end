'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./posts/events.js')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  events.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// function render (data) {
//   $('#posts').append(data)
// }
//
// $(document).ready(function () {
//   $('#postContent').click(function () {
//     const post = {
//       photo: $('#addPhoto').val(),
//       catch_date: $('#catchDate').val(),
//       content: $('addContent').val()
//     }
//     render(post)
//   })
// })
