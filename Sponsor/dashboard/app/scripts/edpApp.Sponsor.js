	var sponsor = angular.module("edpApp.Sponsor", ['edpApp']);
	sponsor.controller("DefaultController", function($scope,$log,cfg) {
	  $scope.message = "Hello, welcome Sponsor";
	  $log.debug('heloooooooooooooooooo sposnor');
	});	
    sponsor.controller("SponsorCtrl", function($scope,$log,cfg) {
      $scope.message = "Hello, welcome Sponsor";
      $log.debug('heloooooooooooooooooo sposnor');
    }); 
    sponsor.controller("HeaderController", function($scope,$log) {
        $log.debug('heloooooooooooooooooo sposnor / Sponsor header exe');
        $scope.instanceName = 'Sponsor';   
		$scope.Pages = ['10','11','12','13','14'];
    });

	sponsor.run(function ($state, $rootScope, $window) {
            $state.go('home.dashboard'); 
			});
	sponsor.config(function ( $stateProvider, $httpProvider, $provide) {
	
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