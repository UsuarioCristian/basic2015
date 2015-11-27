'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', []).
value('version', '0.1')

.factory('ApiEndpointFactory', ['$http','$location', function($http, $location) {
	
	var ApiEndpoint = $location.protocol() + "://" + $location.host() + ":" + $location.port();
	
	return{
		ApiEndpoint : ApiEndpoint
	}	
	
}])

.factory('CountryFactory', ['$http','ApiEndpointFactory', function($http, ApiEndpointFactory) {
	var countries = [];
	return{
		getAllCountries:function(){
			
			$http.get(ApiEndpointFactory.ApiEndpoint +'/basic2015/web/resource/search')
			.then(function(response){
				console.log(response);
				console.log('Ejecutado')
			}, function(response){
				/*error*/
			});
		},

		getCountries:function(){
			return countries;
		},

		crearPais:function(){

			var pais = {
				code: 'MX',
				name: 'Mexico',
				population: '6100000'
			}


			$http.post(ApiEndpointFactory.ApiEndpoint +'/basic2015/web/resource/add', pais)
			.then(function(response){
				console.log(response);
				console.log('Ejecutado')
			}, function(response){
				/*error*/
			});
		},
	}
	
}])