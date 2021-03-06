(function() {
    'use strict';

    angular
        .module('contactApp')
        .directive('contactRow', contactRow)

    function contactRow() {
        var directive = {
            templateUrl: 'directives/contact-row/contact-row.template.html',
            scope: {
                contact: '=',
                check: '&',
                changeStatus: '&'
            }
        };
        return directive;
    }

})();