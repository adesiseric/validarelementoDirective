(function () {
    'use strict';

    function Tooltip () {
        return {
            restrict: 'A',
            replace: false,
            transclude: true,
            templateUrl: 'views/directives/tooltip.html',
            scope: {
                msg: '@tooltipMessage',
                display: '@tooltipDisplay'
            },
            link: function ( scope, element, attrs ) {
                var tipElement = element.find('.tip'),
                    tooltipElement = tipElement.children(),
                    tooltip = element.find('.tooltip'),
                    parentElement,
                    tooltipElementHeight,
                    tooltipElementWidth,
                    tooltipHeight,
                    tooltipWidth,
                    topAttribute,
                    leftAttribute;

                element.bind('mouseenter', function () {
                    setStyle();
                });

                element.bind('mouseleave', function () {
                    tooltip.css(
                        {
                            opacity: 0,
                            filter: 'alpha(opacity=0)'
                        }
                    );
                });

                function setStyle () {
                    parentElement = element.parent();
                    tooltipElementHeight = tooltipElement.outerHeight();
                    tooltipElementWidth = tooltipElement.outerWidth();
                    tooltipHeight = tooltip.outerHeight();
                    tooltipWidth = tooltip.outerWidth();

                    if ( scope.display == 'top' ) {
                        topAttribute = (parentElement.outerHeight() - tooltipElementHeight) + tooltipHeight * -1;
                        leftAttribute = ((tooltipWidth / 2 - 15) - (tooltipElementWidth / 2)) * -1;
                    }

                    if ( scope.display == 'bottom' ) {
                        topAttribute = parentElement.outerHeight();
                        leftAttribute = ((tooltipWidth / 2 - 15) - (tooltipElementWidth / 2)) * -1;
                    }

                    if ( scope.display == 'right' ) {
                        topAttribute = ((tooltipHeight/2) * - 1) + (parentElement.outerHeight() - tooltipElementHeight);
                        leftAttribute = (tooltipElementWidth + 30);
                    }

                    if ( scope.display == 'left' ) {
                        topAttribute = ((tooltipHeight/2) * - 1) + (parentElement.outerHeight() - tooltipElementHeight);
                        leftAttribute = -tooltipWidth;
                    }

                    tooltip.css(
                        {
                            opacity: 1,
                            filter: 'alpha(opacity=1)',
                            top: topAttribute,
                            left: leftAttribute,
                            'max-width': '100px',
                            '-webkit-transition-property': 'all',
                            '-webkit-transition-delay': '0.2s',
                            '-moz-transition-property': 'all',
                            '-moz-transition-delay': '0.2s',
                            '-o-transition-property': 'all',
                            '-o-transition-delay': '0.2s',
                            'transition-property': 'all',
                            'transition-delay': '0.2s'
                        }
                    );
                }
            }
        };
    }

    angular.module( 'tooltipDirective', [] )
    .directive( 'tooltip', Tooltip );

})();