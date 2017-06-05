/**
 * Movie example
 */

define( [ 'angular',
          'tmdb/partials/movietile/MovieTileController' ], 
    function( angular, MovieTileController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: MovieTileController,
                templateUrl: '/tmdb/partials/movietile/movieTile.html',
                restrict: 'E',
                scope: {
                    movie: '=ngModel',
                    even: '='
                }
            };
        };
    }
);