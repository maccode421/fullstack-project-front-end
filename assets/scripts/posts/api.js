'use strict'

const app = require('./app.js')
const config = require('../config.js')
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

const index = () => {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'GET'
  })
}

const show = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + id,
    method: 'GET'
  })
}

const update = (data) => {
  return $.ajax({
    url: app.host + '/posts/' + data.post.id,
    method: 'PATCH',
    data
  })
}

const destroy = (id) => {
  return $.ajax({
    url: app.host + '/posts/' + id,
    method: 'DELETE'
  })
}

const create = (data) => {
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    data
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
  // createPost,
  index,
  show,
  update,
  destroy,
  create,
  createComment,
  showComment,
  updateComment,
  deleteComment
}
