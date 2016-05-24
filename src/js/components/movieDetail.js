var React = require('react');
var AppActions = require('../actions/app_actions');
var AppStore = require('../stores/app_store');

var MovieDetail = React.createClass({
	render: function() {
		return (
			<div className="well">
				<div className="row">
					<div className="col-md-4">
						<img className="thumbnail" src={this.props.movie.Poster} />
					</div>
					<div className="col-md-8">
						<h4>{this.props.movie.Title}</h4>
						<ul className="list-group">
							<li className="list-group-item">Year released: {this.props.movie.Year}</li>
							<li className="list-group-item">IMBD Id: {this.props.movie.imdbID}</li>
						</ul>
						<a className="btn btn-primary" target="_blank" href={'http://www.imdb.com/title/' + this.props.movie.imdbID}>Go to the movie</a>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = MovieDetail;