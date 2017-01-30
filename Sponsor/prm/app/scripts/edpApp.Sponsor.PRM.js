	var prm = angular.module("edpApp.Sponsor.PRM", ['edpApp']);
	prm.controller("DefaultController", function($scope,$log,cfg) {
	  $scope.message = "Hello, welcome prm";
	  $log.debug('heloooooooooooooooooo prm');
	});	
    prm.controller("SponsorCtrl", function($scope,$log,cfg) {
      $scope.message = "Hello, welcome prm";
      $log.debug('heloooooooooooooooooo prm');
    }); 
    prm.controller("HeaderController", function($scope,$log) {
        $log.debug('heloooooooooooooooooo prm / prm header exe');
        $scope.instanceName = 'PRM';   
		$scope.Pages = ['20','21','22','23','24'];
    });

	prm.run(function ($state, $rootScope, $window) {
            $state.go('home.dashboard'); 
			});
	prm.config(function ( $stateProvider, $httpProvider, $provide) {
	
            $stateProvider
                    .state('home.dashboard', {
                        url: '/dashboard',
                        cache: false,
                        views: {
                            'container@': {
                                templateUrl:  'views/contentLayout.html',
                                controller: 'DefaultController'
                            }                            
                        }
                    });
	}); 