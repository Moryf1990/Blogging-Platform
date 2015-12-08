var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "col-sm-12">
				<div className = "homeComponent">
					<h1 className = "homeHeader">Welcome to my Blogging Platform</h1>
					<div className = "homeLinks">
						<a className = "homeContent" href = "#register">REGISTER</a>
						<a className = "homeContent" href = "#login">LOGIN</a>
					</div>
				</div>
			</div>
		);
	}
});