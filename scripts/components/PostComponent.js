var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "col-sm-12">
				<div className = "postComponent">
					<h1 className = "postHeader1">This is where you can post about anything and everything.</h1>
					<h3 className = "postHeader2">Click the submit button when you are done.</h3>
						<div>
							<input className = "postInput" placeholder = "Title"></input>
						</div>

						<div>
							<input className = "postInput" placeholder = "Category"></input>
						</div>

						<div>
							<textarea className = "postTextArea" placeholder = "Body"></textarea>
						</div>

						<button id = "postButton">Submit</button>
				</div>
			</div>
		);
	}
});