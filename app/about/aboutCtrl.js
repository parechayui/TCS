(function(){
    angular
        .module('app')
        .controller('AboutCtrl',['$scope',AboutCtrl]);

    function AboutCtrl($scope) {

        this.message = 'This is Test Data';

        this.cars = [
            {
                name: 'Mazda',
                price: 5000
            },
            {
                name: 'Benz C ',
                price: 10000
            },
            {
                name: 'BMW ',
                price: 15000
            }
        ];

    }
})();
