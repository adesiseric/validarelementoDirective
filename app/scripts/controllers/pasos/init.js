(function () {
    'use strict';

    function Init ( $scope ) {

        function setup () {
            console.log('Estamos en el controlador Init.');
            $scope.reg = {};
            $scope.reg.letter = /^([a-zA-Z\sÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð])+$/;
        }

        setup();

    }

    angular.module( 'wibeApp' )
    .controller( 'Init', ['$scope', Init] );

})();