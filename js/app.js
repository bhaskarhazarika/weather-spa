//my module
var weatherApp=angular.module('weatherApp',['ngRoute','ngResource']);


//routes

weatherApp.config(function ($routeProvider){
	$routeProvider

	.when('/',{
		templateUrl:'pages/home.html',
		controller:'homeController'
	})
	.when('/forecast',{
		templateUrl:'pages/forecast.html',
		controller:'forecastController'
	})
});

//services
weatherApp.service('cityService',function(){
	this.city="New York,NY";
});

//controllers
weatherApp.controller('homeController',['$scope','cityService',function($scope,cityService){
	$scope.city=cityService.city;
	
	$scope.$watch('city',function(){
		cityService.city=$scope.city;
	})

}]);

weatherApp.controller('forecastController',['$scope','$resource','cityService',function($scope,$resource,cityService){
	$scope.city=cityService.city;
	
	$scope.weatherApi=
	$resource("http://api.openweathermap.org/data/2.5/forecast/daily",{
		callback:"JSON_CALLBACK"},{get:{method : "JSONP"}});
		
		$scope.weatherResult=$scope.weatherApi.get({ q: $scope.city,cnt:2,appid:"6bafeec1eebcba400640c1535049f4ad" });
		
		console.log($scope.weatherResult);
		
}]);

