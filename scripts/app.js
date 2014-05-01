function SugarCountCtrl($scope){
	$scope.count = 0;

	$scope.plusOne = function(){
		$scope.count++
	};
	
	$scope.lessOne = function(){
		$scope.count--
	};

	return $scope;
}