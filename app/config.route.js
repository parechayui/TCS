/*This is router controller module which controlles route configuration,change the views based on the state*/
angular.module('app.routeController', [
    'ui.router',
    'aboutController'])
    .config(config);

/*This to change the router configuration*/
function config( $stateProvider, $urlRouterProvider, $locationProvider){


        $urlRouterProvider.otherwise('/');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/partial_home.html'
            })

            .state('home.list', {
                url: '/list',
                templateUrl: 'app/home/partial-home-list.html',
                controller: function($scope) {
                    $scope.names = ['John', 'Ram', 'Mike'];
                }
            })

        // nested list with just some random string data
            .state('home.paragraph', {
                url: '/paragraph',
                template: 'Hey this is a nested template.'
            })


        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('about', {
                url: '/about',
                views: {

                // the main template will be placed here (relatively named)
                    '': { templateUrl: 'app/about/partial-about.html' },

                // the child views will be defined here (absolutely named)
                    'columnOne@about': { template: 'Look I am a column 1!' },

                // for column two, we'll define a separate controller
                    'columnTwo@about': {
                        templateUrl: 'app/about/table-data.html',
                        controller: 'aboutController'
                    }
                }
            })


        // Contact page and it's views =================================
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html'
            })

      /*To get rid of # tag need to use this,but we can't reload that page again*/
       /*$locationProvider.html5Mode(true);*/

    }/*End of config function */

