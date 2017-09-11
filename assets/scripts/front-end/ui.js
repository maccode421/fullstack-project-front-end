'use strict'
// remove signIn and signOut
const app = require('./app.js')

// remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('Sign in successful.')
}

// remove me before code-along
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('Sign out successful.')
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const createPostSuccess = (data) => {
  app.user = data.user
  app.user.id = data.user.id
  console.log(data)
  console.log('Post Successfully Created')
}

const createCommentSuccess = (data) => {
  app.user = data.user
  app.user.id = data.user.id
  console.log(data)
  console.log('Comment Successfully Created')
}

const success = (data) => {
  console.log('success')
  console.log(data)
}

const fail = (error) => {
  console.log('failed')
  console.error(error)
}

module.exports = {
  fail,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  createPostSuccess,
  createCommentSuccess
}
