(function(){
    'use strict';

    angular
    .module('contactApp')
    .component('favoritePage', {
    templateUrl: 'components/favorite-page/favorite-page.template.html',
    controller: FavoritePageController
});

FavoritePageController.$inject = ['NUMBER_EQUIVALENT_OF_TRUE', 'Contact'];
    
    function FavoritePageController(NUMBER_EQUIVALENT_OF_TRUE, Contact) {
        var self = this;
        Contact.getAll().then(function(result) {
            
            self.favorite = result.filter(function (e) {
                return e.isFavorite === NUMBER_EQUIVALENT_OF_TRUE;
            });
        
});
    }

})();