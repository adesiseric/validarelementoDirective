(function () {
    'use strict';

    function Titular () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'views/directives/titular.html',
            link: function ( scope, element, attrs ) {
                console.log('datosTitularDirective');
            }
        };
    }

    angular.module( 'datosTitularDirective', ['elementValidationDirective'] )
    .directive( 'titular', Titular );

})();