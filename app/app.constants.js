(function(){

	angular.module('app').constant('configs', {
		BASE_URL: 'http://angular.local',
		LANG: 'sv', //'sv', 'en'
		OWNER: 'Flouken',

		authorize: {				// Used by /app/shared/authorize
			LOGIN_STATE: 'home',
			LOGIN_REDIRECT_USER: 'admin',
			LOGIN_REDIRECT_MODERATOR: 'admin',
			LOGIN_REDIRECT_ADMIN: 'admin',
			LOGOUT_STATE: 'home',
			USERNAME_EMAIL: false,
			ERROR_POPUP: false,
			user_level: {
				USER: 		1,
				MODERATOR: 	2,
				ADMIN: 		3
			}
		},
		modals: {
			ANIMATION: true
		}
	});

})();