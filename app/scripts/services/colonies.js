(function () {
    'use strict';

    var URLS = {
        colonies: 'json/colonias.json'
    };

    function Colonies ( $http ) {

        // Se declara un objeto por el cual se llama a las funciones del servicio
        var service = {
            getColonies: getColonies
        };

        // Funciones para ejecutar las particulares del servicio
        function getColonies () {
            return $http.get(URLS.colonies);
        }

        // Regresamos el objeto para poder ejecutar las acciones del servicio
        return service;

    }

    // Se crea el servicio en forma global
    angular.module( 'ColoniesHandling', [] )
    // Inyectamos la dependencia $http para la función que contiene el servicio
    .factory( 'Colonies', ['$http', Colonies] );

})();