'use strict';

(function () {

	angular.module('app', ['app.core']);

	angular.module('app.core', ['pascalprecht.translate', 'ui.bootstrap', 'ui.router', 'angular-jwt', 'app.templates']);
})();
(function () {

	angular.module('app').constant('configs', {
		BASE_URL: 'http://angular.local',
		LANG: 'sv', //'sv', 'en'
		OWNER: 'Flouken',

		authorize: { // Used by /app/shared/authorize
			LOGIN_STATE: 'home',
			LOGIN_REDIRECT_USER: 'admin',
			LOGIN_REDIRECT_MODERATOR: 'admin',
			LOGIN_REDIRECT_ADMIN: 'admin',
			LOGOUT_STATE: 'home',
			USERNAME_EMAIL: false,
			ERROR_POPUP: false,
			user_level: {
				USER: 1,
				MODERATOR: 2,
				ADMIN: 3
			}
		},
		modals: {
			ANIMATION: true
		}
	});
})();
(function () {

	angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

		$locationProvider.html5Mode(true); //https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			views: {
				menu: {
					template: '<h1>Menu</h1>'
				},
				content: {
					template: '<h1>Content of angular.local</h1>'
				},
				foot: {
					template: '<h1>Footer</h1>'
				}
			}
		}).state('about', {
			url: '/about',
			views: {
				menu: {
					template: '<h1>Menu</h1>'
				},
				content: {
					template: '<h1>About angular.local</h1>'
				},
				foot: {
					template: '<h1>Footer</h1>'
				}
			}
		});
	});
})();