define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService ) {
        "use strict";

        var MovieTileController = function($scope, TMDBAPIService, $routeParams ) {

            $scope.view   = {
                images: config.apiImg
            };
            console.log('movie tile');

            $scope.clickOne = function(){
               console.log("en el click one");
           };

           $scope.clickTwo = function(){
               console.log("en el click two");
           };
        };



        MovieTileController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return MovieTileController;
    }
);