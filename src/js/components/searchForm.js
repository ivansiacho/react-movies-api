var React = require('react');
var AppActions = require('../actions/app_actions');
var AppStore = require('../stores/app_store');

var SearchForm = React.createClass({
	render: function() {
		return (
			<div className="search-form">
				<h1 className="text-center">Search for a movie</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" ref="title" placeholder="type your movie"/>
					</div>
					<button className="btn btn-primary btn-block">Search Movies</button>
				</form>
			</div>
		)
	},
	onSubmit: function(event) {
		event.preventDefault();

		var movie = {
			title: this.refs.title.value.trim()
		};

		AppActions.searchMovies(movie);
	}
});

module.exports = SearchForm;