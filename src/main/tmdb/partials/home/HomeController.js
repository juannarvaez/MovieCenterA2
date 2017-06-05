define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, config,TMDBAPIService) {
        "use strict";

         var HomeController = function($scope, TMDBAPIService ) {

            $scope.view   = {
                movies: [],
                images: config.apiImg,
            };

            var api = TMDBAPIService.Discover();
            api.discover.movies().then(function ( response ) {
                $scope.view.movies = response.data;
            });
            
        };

        HomeController.$inject = [ '$scope','TMDBAPIService' ];

        return HomeController;
    }
);