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
				<div className = "loginComponent">
					<form onSubmit = {this.onLogin}>
						<h1 className = "loginHeader">This is where you login.</h1>
						{errorElement}
						<div>
							<input className = "loginInput" ref = "username" placeholder = "Username"></input>
						</div>
						
						<div>					
							<input className = "loginInput" ref = "password" placeholder = "Password"></input>
						</div>
						<button className = "loginButton">Login</button>
					</form>
				</div>
			</div>
		);
	},

	onLogin: function(e) {
		e.preventDefault();
		Parse.User.logIn(
			this.refs.username.value,
			this.refs.password.value,
			{
				success: (u) => {
					this.props.router.navigate('posts', {trigger: true});
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