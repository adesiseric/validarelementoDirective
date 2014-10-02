(function () {
    'use strict';

    var URLS = {
        prueba: '/views/tooltips/mensajePrueba.html',
        init: '/views/404.html'
    };

    function Tooltip ( $http ) {

        var templates = {
            getTemplate: getTemplate
        };

        function getTemplate ( _template ) {
            return $http.get(URLS[_template]);
        }

        return templates;

    }

    angular.module( 'tooltipTemplatesHandling', [] )
    .factory( 'Tooltip', ['$http', Tooltip] );

})();