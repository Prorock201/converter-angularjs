(function() {
	'use strict';
	angular
		.module('app')
		.factory('currencyConverterFactory', currencyConverterFactory);

	currencyConverterFactory.$inject = ['$http'];

	function currencyConverterFactory($http) {
		var service = {};

		const BANK_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
		var uah = {
			UAH: {
				buy: 1,
				sell: 1
			}
		};

		service.getCurrency = function() {
			return $http
						 		.get(BANK_URL)
								.then(service.recordCurrency);
		};

		service.recordCurrency = function(response) {
			var data = response.data;
			data.map(function(item,index){
				var currency = item.ccy;
				uah[currency] = {};
				uah[currency].buy = item.buy;
				uah[currency].sale = item.sale;
			});
			console.log(uah);
			return uah;
		};

		service.calculate = function(converter) {
			let result = 100 * (converter.from.buy) / (converter.to.sale);
			converter.result = result;
			console.log(result);
		};

		return service;
	};
})();