(function(){

    angular.module('app', [
        'app.core'
    ]);

    angular.module('app.core', [
        'pascalprecht.translate',
        'ui.bootstrap',
        'ui.router',
        'angular-jwt',
        'app.templates'
    ]);

})();