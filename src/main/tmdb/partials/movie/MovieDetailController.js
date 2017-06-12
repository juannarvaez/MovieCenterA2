define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, $routeParams, config, TMDBAPIService ) {
        "use strict";

        var MovieDetailController = function($scope, TMDBAPIService, $routeParams, ) {

            var pointer = 0;
            $scope.view   = {
                details: {},
                images: config.apiImg,
                actor: {},
            };

            var api = TMDBAPIService.Movie();

            api.movie.movie($routeParams.id).then( function ( response ) {
                $scope.view.details = response.data;
                console.log($scope.view.details);

                var index =  $scope.view.details.videos.results.length;
                var results = $scope.view.details.videos.results;


                for (var i = 0; i < index; i++) {
                    if( results[i].type == "Trailer"){
                        $scope.trailer = config.apiYoutube+results[i].key;
                        break;   
                    }                   
                }


            });

            $scope.movieSlider = function(direction){
                var limit = $('.form_container .slide').length;

                pointer = (direction == 'right') ? pointer + 1 : pointer-1;
                pointer = (direction >= limit) ? 0 : pointer ;
                pointer = (direction < 0 ) ? limit - 1 : pointer ;

                var mensaje = -(pointer * $('.form_container .slide').width())+"px";
                console.log(mensaje);

                $('.form_container .slide_container').animate({
                    'margin-left': -(pointer * $('.form_container .slide').width())+"px"

                });

                

            }

            $scope.showActor= function(id_actor){

               
                for (var i in $scope.view.details.credits.cast){
                    if ($scope.view.details.credits.cast[i].id == id_actor) {
                        $scope.view.actor = $scope.view.details.credits.cast[i];
                        console.log($scope.view.actor);
                        break;
                    }
                }

                console.log( $scope.view.actor);

                console.log("url(https:"+ $scope.view.images + $scope.view.actor.profile_path +")");

                $("#actorDetailPanel").css({
                   'background-image': "url(https:"+ $scope.view.images + $scope.view.actor.profile_path +")",
                   'background-repeat': 'no-repeat',
                   'display':'block',
                });
                
            }

            $scope.closeActorDetail=function(){
                 $("#actorDetailPanel").css({
                   'display':'none',
                });
            }

        };

        MovieDetailController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];



        return MovieDetailController;
    }


);