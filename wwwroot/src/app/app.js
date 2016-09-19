require('./register-dependencies');
require('./css/styles.css');

var rootTemplate = require('./view/root/root.html');
var mainTemplate = require('./view/main/main.html');
var lesson3Template = require('./view/lesson_3/lesson_3.html');

(function (angular) {
    'use strict';

    angular
        .module('app', ['ui.router', 'ui.bootstrap'])
        .config(
        ['$locationProvider', '$urlRouterProvider', '$stateProvider',
            function($locationProvider, $urlRouterProvider, $stateProvider) {
                $locationProvider.hashPrefix('!').html5Mode(false);

                $stateProvider
                    .state('root', {
                        abstract: true,
                        template: rootTemplate,
                        controller: 'root.controller',
                        controllerAs: 'root' 
                    })
                    .state('root.main', {
                        url: '/',
                        template: mainTemplate,
                        controller: 'main.controller',
                        controllerAs: 'main' 
                    })
					.state('root.lesson_1', {
						controller: 'lesson_1.controller',
						url: '/lesson_1',
						template: '<svg id="chess_board" width="300" viewbox="0 0 100 100"></svg>'
					})
					.state('root.lesson_2', {
						controller: 'main.controller',
						url: '/lesson_2',
						template: '<h1>Hello world!</h1>'
					})
					.state('root.lesson_3', {
						controller: 'lesson_3.controller',
						url: '/lesson_3',
						template: lesson3Template
					})

                $urlRouterProvider.otherwise('/');
            }
        ])
        .run(['$rootScope',
            function ($rootScope) {

            }
        ]);

    require('./register'); //вызов модуля зависимостей приложения

})(angular);