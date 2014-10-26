(function() {
    angular
        .module('myApp')
        .controller('myController', myController);

    myController.$inject = ['$scope', 'messageService'];

    function myController($scope, messageService) {
        $scope.message = messageService.message;
    }

})()