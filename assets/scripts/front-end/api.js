'use strict'

const app = require('./app.js')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: { // Data when user sign-up
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}

const createPost = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/posts/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const showPost = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/posts/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updatePost = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/posts/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {

    }
  })
}

const deletePost = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/posts/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createComment = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/comments/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const showComment = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/comments/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateComment = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/comments/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {

    }
  })
}

const deleteComment = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/comments/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createPost,
  showPost,
  updatePost,
  deletePost,
  createComment,
  showComment,
  updateComment,
  deleteComment
}