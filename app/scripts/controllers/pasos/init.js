(function () {
    'use strict';

    function Init ( $scope, $http ) {

        function setup () {
            console.log('Estamos en el controlador Init.');
            includeRegExp();
            incluirHtmlTooltip();
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

        function includeRegExp () {
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
        }

        function assignGender () {
            if ( ! $scope.model.titular.sexo ) {
                $scope.model.titular.sexo = 'HOMBRE';
            }
        }

        function incluirHtmlTooltip () {
            $http.get('/views/tooltips/mensajePrueba.html')
            .success(function (data) {
                console.log(data);
                $scope.htmlTooltip = data;
            });
        }

        setup();

    }

    angular.module( 'wibeApp' )
    .controller( 'Init', ['$scope', '$http', Init] );

})();