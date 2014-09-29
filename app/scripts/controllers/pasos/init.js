(function () {
    'use strict';

    function Init ( $scope ) {

        function setup () {
            console.log('Estamos en el controlador Init.');
        }

        setup();

    }

    angular.module( 'wibeApp' )
    .controller( 'Init', ['$scope', Init] );

})();