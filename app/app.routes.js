(function(){
	
	angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider){

        $locationProvider.html5Mode(true);               //https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
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