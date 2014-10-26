describe('messageService', function() {

    beforeEach(module('myApp'));

    describe('message', function() {

        it('should say hello world', inject(function (messageService) {
            messageService.message.should.equal('Hello, world!');
        }));

    });

});