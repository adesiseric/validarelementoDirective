(function () {
    'use strict';

    function config ( $routeProvider ) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/init.html'
        })
        .when('/colonias', {
            templateUrl: 'json/colonias.json'
        })
        .when('/404', {
            templateUrl: 'views/404.html'
        })
        .otherwise({redirectTo: '/404'});
    }

    angular.module( 'wibeApp' , [
        // De la libreria angular-route
        'ngRoute',
        // Directiva para validar los inputs y selects
        'elementValidationDirective',
        // Directiva para los datos del titular
        'datosTitularDirective',
        // Directiva de angular-bootstrap
        'ui.bootstrap',
        // Para el servicio de colonias
        'ColoniesHandling',
        // Servicio para tooltip Templates
        'tooltipTemplatesHandling'
    ] )
    .config( ['$routeProvider', config] );

})();