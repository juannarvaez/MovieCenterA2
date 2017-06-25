define( [ 'angular',
          'config/config'],
    function( angular, config ) {
        "use strict";

        var ScoreController = function( $scope ) {

            $scope.view = {
                color: 'gray'
            };

            var internal = {
                assignColor: function( val ) {
                    
                    if( val >= 7 ){
                        $scope.view.color = 'green';
                    }
                    if( val <= 6 ){
                        $scope.view.color = 'red';
                    }
                }
            };

            $scope.click = function() {
                if ($scope.action && typeof($scope.action) === "function") {
                    $scope.action();
                }
                console.log('action');
            };

           internal.assignColor($scope.val);
        };

        ScoreController.$inject = [ '$scope' ];

        return ScoreController;
    }
); 