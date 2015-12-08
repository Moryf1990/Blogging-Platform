'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
require('bootstrap');

Parse.initialize('UIgsSikJA1BY1w1ph5h7uTaKp5RgHZvBbNhsDaVN', 'GN6flAW7aO8uwt8lWrs7eS6CSs37sUqrMchQUBC0');

var HomeComponent = require('./components/HomeComponent');
var NavigationComponent = require('./components/NavigationComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');
var PostComponent = require('./components/PostComponent');
var ViewPostsComponent = require('./components/ViewPostsComponent');
var PostsComponent = require('./components/PostsComponent');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'login': 'login',
		'register': 'register',
		'post': 'post',
		'viewPosts': 'viewPosts',
		'posts': 'posts',
		'logout': 'logout'
	},

	home: function() {
		ReactDOM.render(<HomeComponent />, app);
	},

	logout: function() {
		Parse.User.logOut();
		this.navigate('', {trigger: true});
	},

	login: function() {
		ReactDOM.render(<LoginComponent router = {this} />, app);
	},

	register: function() {
		ReactDOM.render(<RegisterComponent router = {this} />, app);
	},

	post: function() {
		ReactDOM.render(<PostComponent />, app);
	},

	viewPosts: function() {
		ReactDOM.render(<ViewPostsComponent />, app);
	},

	posts: function() {
		ReactDOM.render(<PostsComponent />, app);
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);
