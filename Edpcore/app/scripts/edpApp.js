    var app = angular.module("edpApp", ['ui.router', 'ngResource']);
	app.controller("DefaultController", function($scope) {
	  $scope.message = "Hello, welcome global";	
	})
    .controller("HeaderController", function($scope) {        $scope.instanceName = 'Core'; $scope.Pages = ['1','2','3']; })
    .controller("FooterController", function($scope) {$scope.datetime= new Date();});

    app.constant('cfg', {
            appName: 'EDP Portal',
            appVersion: 1.0,
            appDebug: false,
            ffPageSize: 12,
            apiUrl: localStorage.getItem('cfg.apiUrl')
        });
    app.run(function ($state, $rootScope, $window) {
            $state.go('home');  
            $rootScope.$on('$stateChangeStart',
                    function (event, toState, toParams, fromState, fromParams) {
                       // debugger
					   // added
                    });                  
    });
	app.config(function ( $stateProvider, $httpProvider, $provide,cfg) {
		$provide.decorator('$log', ['$delegate', function ($delegate) {
                // Keep track of the original debug method, we'll need it later.
                var origDebug = $delegate.debug;
                /*
                 * Intercept the call to $log.debug() so we can add on 
                 * our enhancement. We're going to add on a date and 
                 * time stamp to the message that will be logged.
                 */
                $delegate.debug = function () {
                    var args = [].slice.call(arguments);
                    args[0] = ['EDP core debugger message -> ',new Date().toString(), ': ', args[0]].join('');

                    // Send on our enhanced message to the original debug method.
                    //window.debugStore.push(args);
                    origDebug.apply(null, args)
                };

                return $delegate;
            }]);

            $provide.factory('$exceptionHandler', function () {
               return function (exception, cause) {
                    exception.message = ' (EDP exception caused by "' + exception.message + '")';
                    //window.debugStore.push([exception.message]);
                    alert(exception.message);
                    throw exception;
                }
            });

            $stateProvider
                    .state('home', {
                        url: '',
                        cache: false,
                        views: {               
                            'mainHeader@': {
                                templateUrl: 'views/header.html',
                                controller: 'HeaderController'
                            },
                            'mainFooter@': {
                                templateUrl: 'views/footer.html',
                                controller: 'FooterController'
                            }                            
                        }
                    });
	});
		