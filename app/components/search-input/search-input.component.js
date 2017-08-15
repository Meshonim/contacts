(function(){
    'use strict';

    angular
    .module('myApp')
    .component('searchInput', {
    templateUrl: 'components/search-input/search-input.template.html',
    controller: function () {
        var self = this;
    },
    bindings: {
        criteria: '='
    }
});

})();