/**
 * Provides a score element
 *
 * @module tmdb.directives.score
 *
 * @requires angular
 * @requires ScoreController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} ScoreController - An instance of ScoreController
 *
 *
 */

define( [ 'angular',
          'tmdb/partials/score/ScoreController' ], 
    function( angular, ScoreController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: ScoreController,
                templateUrl: '/tmdb/partials/score/score.html',
                restrict: 'E',
                scope: {
                    val: '=', //? is to specify that the value is optional
                    prefix: '@', //string
                    action: '&' //function
                }
            };
        };
    }
);