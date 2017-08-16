(function(){
    'use strict';

    angular
    .module('contactApp')
    .component('favoriteContact', {
    templateUrl: 'components/favorite-contact/favorite-contact.template.html',
    controller: FavoriteContactController,
    bindings: {
        contact: '<'
    }
});

function FavoriteContactController () {
        var self = this;
    }

})();