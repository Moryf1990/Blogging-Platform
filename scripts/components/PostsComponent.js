var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "col-sm-12">
				<div className = "postsComponent">
					<h1 className = "postsHeader1">These are all of the posts.</h1>
				</div>
			</div>
		);
	}
});