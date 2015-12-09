var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var PostsModel = require('../models/PostsModel');
var PostsRowComponent = require('./PostsRowComponent');

module.exports = React.createClass({
	getInitialState: function() {
		return {'posts': []}
	},

	componentWillMount: function(e) {
		var postsQuery = new Parse.Query(PostsModel);
		postsQuery.descending('createdAt').find().then(
			(posts) => {
				this.setState({posts: posts})
			}
		);
	},

	render: function() {
		var allPosts = this.state.posts.map(function(post) {
			var prefix = '#posts';
			var url = prefix + post.id;
			return <a className = "postsList" href = {url} key = {post.id}><PostsRowComponent post = {post}/></a>
		});

		return(
			<div className = "col-sm-12">
				<div className = "postsComponent">
					<h1 className = "postsHeader1">These are all of the posts.</h1>
				</div>
				<div clasName = "postsList">
				{allPosts}
				</div>
			</div>
		);
	}
});