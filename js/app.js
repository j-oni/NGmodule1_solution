(function() {
	// "use strict";
	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);
	LunchCheckController.$inject = ["$scope"];
	function LunchCheckController($scope) {
		$scope.lunch = "";
		$scope.message = "";


		$scope.displayMessage = function() {
			var lunchCount = $scope.lunch.split(",").length;
			console.log(lunchCount);
			if ($scope.lunch == false) {
				$scope.message = "Please enter data first";
			} else if (lunchCount < 4) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		}
	};
})();