var React = require('react');
var ViewPostsComponent = require('./ViewPostsComponent');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
					<div className = "viewPostsList">{this.props.post.get('Title')}</div>
			</section>
		);
	}
})