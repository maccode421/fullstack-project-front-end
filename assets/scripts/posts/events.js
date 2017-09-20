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

const onGetPosts = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onSuccess)
    .catch(ui.onError)
}

const onGetPost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const post = data.post
  if (post.id.length !== 0) {
    api.show(post.id)
      .then(ui.onSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a post id!')
  }
}

const onUpdatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.id.length !== 0) {
    api.update(data.id)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a post id!')
  }
}

const onDeletePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const post = data.post
  if (post.id.length !== 0) {
    api.destroy(post.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a post id!')
  }
}

const onCreatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onCreateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createComment(data)
    .then(ui.createCommentSuccess)
    .catch(ui.createCommentFailure)
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
  onGetPosts,
  onGetPost,
  onUpdatePost,
  onDeletePost,
  onCreatePost,
  onCreateComment,
  addHandlers
}
