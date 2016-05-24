var AppDispatcher = require('../dispatcher/app_dispatcher');
var AppConstants = require('../constants/app_constants');

var AppActions = {
	searchMovies: function(movie) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_MOVIES,
			movie: movie
		});
	},
	receiveMovieResults: function(movies) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
			movies: movies
		});
	}
};

module.exports = AppActions;