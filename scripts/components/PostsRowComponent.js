var React = require('react');
var PostsComponent = require('./PostsComponent');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
					<div>{this.props.post.get('Title')}</div>
					<div>{this.props.post.get('Category')}</div>
					<div className = "postsList">{this.props.post.get('Body')}</div>
			</section>
		);
	}
});