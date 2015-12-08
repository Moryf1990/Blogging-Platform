var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "col-sm-12">
				<div className = "viewPostsComponent">
					<h1 className = "viewPostsHeader1">These are all of the posts.</h1>
					<h3 className = "viewPostsHeader2">The most recent ones are at the top. Click on any of them to be taken to the post.</h3>
				</div>
			</div>
		);
	}
});