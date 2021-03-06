var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var PostsModel = require('../models/PostsModel');
var ViewPostsRowComponent = require('./ViewPostsRowComponent');

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
			var prefix = '#posts/';
			var url = prefix + post.id;
			var datePosted = `${post.get('createdAt')}`;
			return <a className = "postLink" href = {url} key = {post.id}><ViewPostsRowComponent post = {post}/>
			       <form>{datePosted}</form></a>
		});

		return(
			<div className = "col-sm-12">
				<div className = "viewPostsComponent">
					<h1 className = "viewPostsHeader1">These are all of the posts.</h1>
					<h3 className = "viewPostsHeader2">The most recent ones are at the top. Click on any of them to be taken to the full post.</h3>
					<div className = "postLink">
					{allPosts} 
					</div>
				</div>
			</div>
		);
	},

});













