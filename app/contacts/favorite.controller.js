(function() {
    'use strict';

    angular
        .module('myApp.favorite', [])
        .controller('FavoriteListController', controller)

    controller.$inject = ['$scope', 'Contact'];

    function controller($scope, Contact) {
        $scope.favorite = Contact.query({contactId: "1"});
    }
})();