(function() {
    'use strict';

    angular
        .module('myApp.contacts', [])
        .controller('ContactListController', controller)

    controller.$inject = ['$scope', 'Contact'];
    
    function controller($scope, Contact) {
        $scope.contacts = Contact.query();
        $scope.contacts.$promise.then(function(result) {
            $scope.contacts = result;
       angular.forEach(result, function(contact) {
    contact.isFavorite = contact.isFavorite === "1";   
});
   });
        //Contact.get({contactid: 1});
        
        console.log($scope.contacts);


        $scope.changeStatus = function (id, isFavorite)
        {
            Contact.favorite({id: id}, {status: isFavorite} );
        }
    }
})();