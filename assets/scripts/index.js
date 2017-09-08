'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./front-end/events.js')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  events.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// $(document).ready(function () {
// $('#postId').on(submit)
// })

// $('#myModal').on('shown.bs.modal', function () {
// $('#myInput').focus()
// })
