(function() {
    angular
        .module('myApp')
        .factory('messageService', messageService);

    function messageService() {
        return {
            message: "Hello, world!"
        }
    }

})()