(function(){
    'use strict';

    angular
    .module('contactApp')
    .component('addPage', {
    templateUrl: 'components/add-page/add-page.template.html',
    controller: AddPageController
});

AddPageController.$inject = ['Contact', 'blockUI', '$state'];

function AddPageController (Contact, blockUI, $state) {
        var self = this;
            self.contact = {};
            self.add = function ()
            {
                if (self.contactForm.$invalid)
                    {
                        alert ("Error: form is not valid");
                        return;
                    }
                blockUI.start();
                Contact.insert(self.contact)
                .catch(function() {
                    alert("Error: can't add object");
                })
                .finally(function(result) {
                    blockUI.stop();
                    $state.go("home");
            });
            }
    }

})();