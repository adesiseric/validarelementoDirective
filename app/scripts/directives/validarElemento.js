(function () {
    'use strict';

    function ValidarElemento () {
        return {
            restrict: 'A',
            replace: true,
            transclude: true,
            templateUrl: 'views/directives/validarElemento.html',
            scope: {
                msg: '@errorMsg'
            },
            link: function ( scope, element, attrs ) {
                var mouseInName = 'mouseIn',
                    formName = 'formularioActual',
                    inputElement = element.find('input').length > 0 ? element.find('input') : element.find('select'),
                    elementName = angular.element(inputElement).attr('name'),
                    showConditionName = 'showCondition',
                    globo = element.find('.popover');

                element.bind("mouseenter", function () {
                    scope.$apply(function () {
                        scope[mouseInName] = true;
                    });
                });

                element.bind("mouseleave", function () {
                    scope.$apply(function () {
                        scope[mouseInName] = false;
                    });
                });

                scope.$watch(formName + '.' + elementName + '.$dirty && ' + formName + '.' + elementName + '.$invalid',
                function ( _value ) {
                    scope[showConditionName] = '' + _value;
                });

                scope.$watch(mouseInName, globePosition(inputElement, globo));

            }
        };
    }

    function globePosition ( _inputElement, _globo ) {
        return function () {

            var offset = _inputElement.offset(),
                offsetTop = offset.top,
                offsetLeft = offset.left,
                offsetParentElement = _inputElement.offsetParent(),
                offsetParent,
                alturaGlobo;

            if ( offsetParentElement.is('body') ) {
                offsetParentElement = null;
            }

            while ( offsetParentElement ) {
                alturaGlobo = _globo.outerHeight();

                if ( alturaGlobo === 0 ) {
                    alturaGlobo = 86;
                }

                offsetParent = offsetParentElement.offset();
                offsetTop = offsetTop - offsetParent.top - alturaGlobo;
                offsetLeft = offsetLeft - offsetParent.left;

                offsetParentElement = offsetParentElement.offsetParent();

                if ( offsetParentElement.is('body') || offsetParentElement.is('html') ) {
                    offsetParentElement = null;
                }

            }

            _globo.css(
                {
                    top: offsetTop,
                    left: offsetLeft,
                    width : _inputElement.outerWidth()
                }
            );
        };
    }

    angular.module( 'elementValidationDirective', [] )
    .directive( 'validarelemento', ValidarElemento );

})();