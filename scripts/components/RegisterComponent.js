var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},

	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}

		return(
			<div className = "col-sm-12">
				<div className = "registerComponent">
					<form onSubmit = {this.onRegister}>
						<h1 className = "registerHeader">This is where you register.</h1>
						{errorElement}
						<div>
							<input className = "registerInput" ref = "username" placeholder = "Username"></input>
						</div>
						
						<div>					
							<input className = "registerInput" ref = "password" placeholder = "Password" type = "password"></input>
						</div>
						<button className = "registerButton">Register</button>
					</form>
				</div>
			</div>
		);
	},

	onRegister: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		user.signUp(
			{
				username: this.refs.username.value,
				password: this.refs.password.value
			},
			{
				success: (u) => {
					this.props.router.navigate('login', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
	}
});