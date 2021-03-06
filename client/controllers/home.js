angular.module('Instagram')
	.controller('HomeCtrl', function($scope, $window, $rootScope, $auth) {

		// check if logged in
		$scope.isAuthenticated = function() {
			return $auth.isAuthenticated();
		};

		// connect email account with instagram
		$scope.linkInstagram = function() {
			$auth.link('instagram')
				.then(function(response) {
					$window.localStorage.currentUser = JSON.stringify(response.data.user);
					$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
				});
		};
	});