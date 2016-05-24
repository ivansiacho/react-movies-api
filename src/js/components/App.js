var React = require('react');
var AppActions = require('../actions/app_actions');
var AppStore = require('../stores/app_store');
var SearchForm = require('./searchForm');
var MovieResults = require('./movieResults');

function getAppState() {
	return {
		movies: AppStore.getMovieResults()
	}
}

var App = React.createClass({
	getInitialState: function() {
		return getAppState();
	},
	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},
	render: function() {
		console.log(this.state);

		return(
			<div>
				<SearchForm/>
				<MovieResults movies={this.state.movies} />
			</div>
		)
	},
	_onChange: function() {
		this.setState(getAppState());
	}
});

module.exports = App;