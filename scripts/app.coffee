SugarCtrl = ($scope) ->
	$scope.count = 0

	$scope.plusOne = () ->
		$scope.count++
	
	$scope.lessOne = () ->
		$scope.count--

	return $scope