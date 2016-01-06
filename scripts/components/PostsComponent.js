var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var PostsModel = require('../models/PostsModel');
var PostsRowComponent = require('./PostsRowComponent');

module.exports = React.createClass({
	getInitialState: function() {
		return {'post': null}
	},

	componentWillMount: function(e) {
		console.log(this.props.postId);
		var postsQuery = new Parse.Query(PostsModel);
		postsQuery.get(this.props.postId).then(
			(post) => {
				console.log(post.get('Title'));
				this.setState({post: post})
			}
		);
	},

	render: function() {
		if(this.state.post === null) {
			return <div>Loading...</div>
		}

		return (
			<div className = "col-sm-12">
				<div className = "postsComponent">
					<h1 className = "postsHeader1">These are all of the posts.</h1>
				</div>
				<div clasName = "postsList">
					<PostsRowComponent post = {this.state.post}/>
				</div>
			</div>
		);
	}
});



