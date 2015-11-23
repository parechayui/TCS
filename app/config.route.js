(function(){
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
                templateUrl: 'app/home/partial_home_list.html',
                controller: 'HomeList'
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
                    '': { templateUrl: 'app/about/partial_about.html' },

                    // the child views will be defined here (absolutely named)
                    'columnOne@about': { template: 'Look I am a column 1!' },

                    // for column two, we'll define a separate controller
                    'columnTwo@about': {
                        templateUrl: 'app/about/table_data.html',
                        controller: 'AboutCtrl'
                    }
                }
            })
            // Contact page and it's views =================================
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html'
            })

            //Charts page with nested views
            .state('chart', {
                url: '/chart',
                templateUrl: 'app/charts/chart.html'
            })

            .state('chart.line', {
                url: '/line',
                templateUrl: 'app/charts/line_chart.html',
                controller: 'LineChartCtrl'
            })

            // nested list with just some random string data
            .state('chart.barchart', {
                url: '/barchart',
                templateUrl: 'app/charts/bar_chart.html',
                controller: 'BarChartCtrl'
            });
    });
})()
