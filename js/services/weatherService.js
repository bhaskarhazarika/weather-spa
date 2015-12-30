weatherApp.service('weatherService',['$resource',function($resource){
    
    this.getdaytimeWeather = function(city,days){
        var weatherApi=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",{
            callback:"JSON_CALLBACK"},{get:{method : "JSONP"}});

		var weatherResult = weatherApi.get({q: city,cnt: days,appid:"6bafeec1eebcba400640c1535049f4ad" });      
        return weatherResult;
    }
   
}]);