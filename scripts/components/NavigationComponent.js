var React = require('react');
var Backbone = require('backbone');

module.exports =  React.createClass({
	componentWillMount: function() {
			this.props.router.on('route', () => {
			this.forceUpdate();
			});
		},

		render: function() {
			var links = [];
			if (Parse.User.current()) {
				links.push(<li className = "navList" key = {'navList1'}><a href = "#">HOME</a></li>);
				links.push(<li className = "navList" key = {'navList4'}><a href = "#post">POST</a></li>);
				links.push(<li className = "navList" key = {'navList5'}><a href = "#viewPosts">VIEWPOSTS</a></li>);
				// links.push(<li className = "navList" key = {'navList6'}><a href = "#posts">POSTS</a></li>);
				links.push(<li className = "navList" key = {'navList7'}><a href = "#logout">LOGOUT</a></li>);
			}

			else {
				links.push(<li className = "navList" key = {'navList1'}><a href = "#">HOME</a></li>);
				links.push(<li className = "navList" key = {'navList2'}><a href = "#login">LOGIN</a></li>);
				links.push(<li className = "navList" key = {'navList3'}><a href = "#register">REGISTER</a></li>);
				links.push(<li className = "navList" key = {'navList4'}><a href = "#post">POST</a></li>);
				links.push(<li className = "navList" key = {'navList5'}><a href = "#viewPosts">VIEWPOSTS</a></li>);
				// links.push(<li className = "navList" key = {'navList6'}><a href = "#posts">POSTS</a></li>);	
			}

				return (
			<div>
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Blogging Platform</a>
				</div>
				
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav ul">
							{links}
						</ul>
				</div>
			</div>
		
		)
	}
});


