angular.module('Instagram')
	.controller('SignupCtrl', function($scope, $auth) {
		$scope.signup = function() {
			var user = {
				email: $scope.email,
				password: $scope.password
			};

			// Satellizer's $auth.signup takes obj and sends to server
			$auth.signup(user)
				.catch(function(response) {
					console.log(response.data);
				});
		};
	});