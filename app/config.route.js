angular.module('app').
    config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .when('', '/home')
        .when('/', '/home')
        .otherwise(function ($injector) {
            $injector.get('$state').go('404', {}, { location: false });
        });

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/partial_home.html'
        })

        .state('home.list', {
            url: '/list',
            templateUrl: 'app/home/partial-home-list.html',
            controller: 'PartialHomeList'
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
                    controller: 'aboutCtrl'
                }
            }
        })
        // Contact page and it's views =================================
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/contact/contact.html'
        })

    .state('chart', {
        url: '/chart',
        templateUrl: 'app/charts/chart.html'
    });

});