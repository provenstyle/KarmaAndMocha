describe('myController', function() {

    describe('mocking the messageService', function() {
        var myController, scope;

        beforeEach(module('myApp'));
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            myController = $controller('myController', {
                $scope: scope,
                messageService: {
                    message: 'Yo'
                }
            });
        }));

        it('should exist', function () {
            myController.should.exist;
        });

        it('should have a message on the scope', function () {
            scope.message.should.exist;
        });

        it('message should be hello world', function () {
            scope.message.should.equal('Yo');
        });
    });

    describe('using the real messageService', function () {
        var myController, scope;

        beforeEach(module('myApp'));
        beforeEach(inject(function ($controller, $rootScope, messageService) {
            scope = $rootScope.$new();
            myController = $controller('myController', {
                $scope: scope,
                messageService: messageService
            });
        }));

        it('message should be hello world', function () {
            scope.message.should.equal('Hello, world!');
        });
    });

    
})