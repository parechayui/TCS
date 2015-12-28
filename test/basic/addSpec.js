
describe('Add Controller', function() {
    beforeEach(module('app'));


    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('addCtrl', function() {

        beforeEach(function() {
            $scope = {};
            controller = $controller('AddCtrl', { $scope: $scope });
        });

        /*when both numbers are positive*/
        it('adds two positive numbers', function() {
            $scope.a=2;
            $scope.b=3;
            expect($scope.sum()).toEqual(5);
        });

        /*When one number is negative please note*/

        it('adds the numbers when one is negative', function(){
            $scope.a=-2;
            $scope.b=3;
            expect($scope.sum()).toEqual(1);
        });

        /*When both numbers are negative*/

        it('adds the number when both are negative', function(){
            $scope.a=-2;
            $scope.b=-3;
           expect($scope.sum()).toEqual(-5);
        });

    });

});
