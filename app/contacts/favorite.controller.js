(function() {
    'use strict';

    angular
        .module('myApp.favorite', [])
        .controller('FavoriteListController', controller)

    controller.$inject = ['$scope'];

    function controller($scope) {
        $scope.contacts = [{
            name: 'John John',
            dob: new Date(1990, 10, 10),
            phone: "+375291111111",
            isFavorite: false,
        }, {
            name: 'Jack Jack',
            dob: new Date(1993, 11, 11),
            phone: "+375292222222",
            isFavorite: true,
        }, {
            name: 'Michael Michael',
            dob: new Date(1995, 9, 9),
            phone: "+375293333333",
            isFavorite: false,
        }, ];
    }
})();