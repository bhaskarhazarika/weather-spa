weatherApp.controller('forecastController',['$scope','$routeParams','cityService','weatherService',function($scope,$routeParams,cityService,weatherService){
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.getdaytimeWeather($scope.city,$scope.days);
		
	$scope.convertToFarenheit=function(degK){
            return Math.round((1.8*(degK -273))+32);
        }
	$scope.convertToDate=function(date){
            return new Date(date*1000);
        }
}]);
