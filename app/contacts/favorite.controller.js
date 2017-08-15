(function() {
    'use strict';

    angular
        .module('contactApp.contacts')
        .controller('FavoriteListController', controller)

    controller.$inject = ['NUMBER_EQUIVALENT_OF_TRUE', '$scope', 'Contact'];
    
    function controller(NUMBER_EQUIVALENT_OF_TRUE, $scope, Contact) {
        Contact.getAll().then(function(result) {
            $scope.favorite = result.filter(function (e) {
                return e.isFavorite === NUMBER_EQUIVALENT_OF_TRUE;
            });
        
});
    }
})();