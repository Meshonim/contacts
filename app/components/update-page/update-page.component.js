(function(){
    'use strict';

    angular
    .module('contactApp')
    .component('updatePage', {
    templateUrl: 'components/update-page/update-page.template.html',
    controller: UpdatePageController
});

UpdatePageController.$inject = ['Contact', '$stateParams', 'blockUI', '$state'];

function UpdatePageController (Contact, $stateParams, blockUI, $state) {
        var self = this;
        Contact.get($stateParams.contactId)
            .then(function(contact) {           
                self.contact = contact;
                var date = self.contact.dob.split('-');
                self.contact.dob = new Date(date[0], date[1] - 1, date[2]);
                self.contact.phone = Number(self.contact.phone);
            })
            .catch (function() {           
                alert("Error: can't get updating object");
                $state.go("home");
            });  
        self.update = function ()
            {
                if (self.contactForm.$invalid)
                    {
                        alert ("Error: form is not valid");
                        return;
                    }
            
                blockUI.start();
                Contact.update(self.contact)
                .catch(function() {
                    alert("Error: can't update object");
                })
                .finally(function() {
                    blockUI.stop();
                    $state.go("home")
                });
            }
    }

})();