var React = require('react');
var AppActions = require('../actions/app_actions');
var AppStore = require('../stores/app_store');
var MovieDetail = require('./movieDetail');

var MovieResults = React.createClass({
	render: function() {
		if (this.props.movies === undefined) {
			return (
				<h3 className="text-center">Restuls not found, find another movie</h3>
			)
		} else if (this.props.movies.length === 0) {
			return false
		}

		return (
			<div>
				<h3 className="text-center">Results</h3>
				{
					this.props.movies.map(function(movie, index) {
						return (
							<MovieDetail movie={movie} key={index} />
						)
					})
				}
			</div>
		)
	}
});

module.exports = MovieResults;