(function () {
    'use strict';

    function Init ( $scope ) {

        function setup () {
            console.log('Estamos en el controlador Init.');
            $scope.reg = {};
            $scope.reg.letter = /^([a-zA-Z\sÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð])+$/;
            $scope.model = {
                titular: {
                    nombre: null,
                    apellidoPaterno: null,
                    apellidoMaterno: null,
                    sexo: null,
                    rfc: null,
                    email: null,
                    telefono: null,
                    telefono2: null,
                    beneficiarioPreferente: null
                }
            };
            assignGender();
        }

        $scope.togglePreferredBeneficiary = function ( _status ) {
            if ( _status ) {
                $scope.showPreferredBeneficiary = true;
            } else {
                $scope.showPreferredBeneficiary = false;
            }
        };

        $scope.calcularRFC = function () {
            // Se llama al servicio para calcular el rfc.
            console.log('Se llama al servicio para calcular el rfc.');
        };

        function assignGender () {
            if ( ! $scope.model.titular.sexo ) {
                $scope.model.titular.sexo = 'HOMBRE';
            }
        }

        setup();

    }

    angular.module( 'wibeApp' )
    .controller( 'Init', ['$scope', Init] );

})();