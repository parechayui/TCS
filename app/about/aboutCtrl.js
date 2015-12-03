(function(){
    'use strict';
    angular
        .module('app')
        .controller('AboutCtrl',AboutCtrl);

    function AboutCtrl() {
    var vm=this;
        vm.message = 'This is Test Data';

        vm.cars = [
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
