/**
 * Movie example
 */

define( [ 'angular',
          'tmdb/partials/movie/MovieDetailController' ], 
    function( angular, MovieDetailController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: MovieDetailController,
                templateUrl: '/tmdb/partials/movie/movieDetail.html',
                restrict: 'E',
                scope: {
                    detail: '=ngModel'
                }
            };
        };
    }
);