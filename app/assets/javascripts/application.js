// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Refreshes the project image to use the selected item
//
//= require jquery
//= require loader
//= require app
//= require handlebars
//= require ember
//= require ember-data
//= require load-initializers
//= require resolver

//= require router
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./initializers
//= require_tree ./models
//= require_tree ./routes

window.App = require('app/app').default.create();