/**
 * Angular directive that will call a function when the 
 * control receives a blur event AND the value was changed.
 *
 * Version: 1.0
 */
(function () {
    'use strict';

    angular
        .module('purplefox.blurchanged', [])
        .directive('blurChanged', blurChanged);

    blurChanged.$inject = [];

    function blurChanged() {
        // Usage:
        //     <input blur-changed="fn">

        var directive = {
            link: link,
            require: '?ngModel',
            restrict: 'A',
            scope: {
                blurChanged: '&'
            }

        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            if (!ngModel) { return; }

            var oldValue = null;

            element.bind('focus', function () {
                scope.$apply(function () {
                    // Save old value on focus.
                    oldValue = element.val();
                });
            });

            element.bind('blur', function () {
                scope.$apply(function () {
                    var newValue = element.val();
                    if (newValue != oldValue) {
                        // Call the function only when value changed.
                        scope.blurChanged()(newValue);
                    }
                });
            });
        }
    }
})();