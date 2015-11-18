describe('addController', function() {
    beforeEach(module('app'));


    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));


    describe('$scope.sum', function() {

        beforeEach(function() {
            $scope = {};
            controller = $controller('addController', { $scope: $scope });
        });

        /*when both numbers are positive*/
        it('adds the number', function() {
            $scope.a=2;
            $scope.b=3;
            var sum= $scope.sum();
            expect(sum).toEqual(5);
        });

        /*When one number is negative*/
        it('adds the numbers when one is negative', function(){
            $scope.a=-2;
            $scope.b=3;
            var sum= $scope.sum();
            expect(sum).toEqual(1);
        });

        /*When both numbers are negative*/
        it('adds the number when both are negative', function(){
            $scope.a=-2;
            $scope.b=-3;
            var sum= $scope.sum();
            expect(sum).toEqual(-5);
        });

    });

});