(function() {
    'use strict';

    angular
        .module('myApp.favorite', [])
        .controller('FavoriteListController', controller)

    controller.$inject = ['$scope', 'Contact'];
    
    function controller($scope, Contact) {
        Contact.getAll().then(function(result) {
            $scope.favorite = result.filter(function (e) {
                return e.isFavorite === "1";
            });
        
});
    }
})();