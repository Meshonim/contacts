(function(){
    'use strict';

    angular
    .module('contactApp')
    .component('searchInput', {
    templateUrl: 'components/search-input/search-input.template.html',
    bindings: {
        criteria: '='
    }
});

})();