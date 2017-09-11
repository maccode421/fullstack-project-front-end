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

function render (data) {
  const content = '<form><h5>Catch Date</h5><input type="date" id="catchDate"><h5>Add Photo</h5><input type="file" id="addPhoto" name="pic" accept="image/*"><h5>Tell Your Tale</h5><textarea name="content" id="addContent" rows=2 cols=20></textarea><button type="submit" id="postContent" class="btn btn-primary">Save Post</button><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></form>'
  $('#posts').append(content)
}

$(document).ready(function () {
  $('#postContent').click(function () {
    const post = {
      photo: $('#addPhoto').val(),
      catch_date: $('#catchDate').val(),
      content: $('addContent').val()
    }
    post.push(post)
    render(post)
  })
})
