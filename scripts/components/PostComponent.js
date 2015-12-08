var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var PostsModel = require('../models/PostsModel');

module.exports = React.createClass({
	getInitialState: function() {
		return {error: null,};
	},

	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className = "red">{this.state.error}</p>
			);
		}

		return(
			<div className = "col-sm-12">
				<div className = "postComponent">
					<h1 className = "postHeader1">This is where you can post about anything and everything.</h1>
					{errorElement}
					<h3 className = "postHeader2">Click the submit button when you are done.</h3>
						<div>
							<input className = "postInput" placeholder = "Title" ref = "Title"></input>
						</div>

						<div>
							<input className = "postInput" placeholder = "Category" ref = "Category"></input>
						</div>

						<div>
							<textarea className = "postTextArea" placeholder = "Body" ref = "Body"></textarea>
						</div>

						<div>
							<button onClick = {this.onNewPost} id = "postButton">Submit</button>
						</div>
				</div>
			</div>
		);
	},

	onNewPost: function(e) {
		e.preventDefault();
		// var newPost = new PostsModel({
			var newPost = new PostsModel();
			newPost.set('Title', this.refs.Title.value);
			newPost.set('Category', this.refs.Category.value);
			newPost.set('Body', this.refs.Body.value);
			newPost.save({
				success: (u) => {
					this.props.router.navigate('viewPosts', {trigger: true});
				}
			});
			// Title: this.refs.Title.value,
			// Category: this.refs.Category.value,
			// Body: this.refs.Body.value
		// });

		// newPost.save();
		// this.props.router.navigate('viewPosts', {trigger: true});
	}
});