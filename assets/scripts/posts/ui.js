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

const onSuccess = (data) => {
  if (data.post) {
    console.log('success')
    console.log(data.post)
  } else {
    console.table(data.posts)
  }
}

const onError = (response) => {
  console.log('error')
  console.error(response)
}

const onDeleteSuccess = (data) => {
  console.log('Post Successfully deleted.')
}

const onUpdateSuccess = (data) => {
  console.log('Post Successfully updated.')
}

const onCreateSuccess = (data) => {
  console.log('Post Successfully Created.')
}

module.exports = {
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  onError,
  onSuccess,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess
}
