describe('PasswordControllerTest', function() {
    beforeEach(module('app'));

    var controller, $scope;

    beforeEach(inject(function($rootScope) {
        $scope = $rootScope.$new();
    }));

    beforeEach(inject(function(_$controller_){
       controller = _$controller_;
    }));


    it('sets the strength to "strong" if the password length is >8 chars', function() {
        controller = controller('PasswordController', { $scope: $scope });
        $scope.password = 'longerthaneightchars';
        $scope.grade();
        expect($scope.strength).toEqual('strong');
    });
});