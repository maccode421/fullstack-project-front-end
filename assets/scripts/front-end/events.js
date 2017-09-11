'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault() // what is this? prevents a link from opening URL
  const data = getFormFields(event.target) // 'data' is when form is filled out
  console.log(data)
  api.signUp(data)
    .done(ui.success)
    .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.fail)
}

const onSignOut = function (event) {
  console.log('hit')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.fail)
}

const onCreatePost = function (event) {
  event.preventDefault()
  api.createPost()
    .then(ui.createPostSuccess)
    .catch(ui.createPostSuccessFailure)
}

const onCreateComment = function (event) {
  event.preventDefault()
  api.createComment()
    .then(ui.createCommentSuccess)
    .catch(ui.createCommentSuccessFailure)
}

// calling id from html when form is submitted
const addHandlers = () => {
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#signOut').on('submit', onSignOut)
  $('#changePassword').on('submit', onChangePassword)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreatePost,
  onCreateComment,
  addHandlers
}
