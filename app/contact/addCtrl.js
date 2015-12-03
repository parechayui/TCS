(function(){
    'use strict';

    angular
       .module('app')
       .controller('AddCtrl',['$scope',AddCtrl]);



    function AddCtrl($scope) {

   $scope.sum =sum;

      function sum() {
          return $scope.a+$scope.b;
      }

    }
         })();