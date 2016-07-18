(function() {
	'use strict';
	angular
		.module('app')
		.directive('currencyConverter', currencyConverter);

	function currencyConverter() {
		let directive = {
			restrict: 'E',
			controller: 'CurrencyConverterCtrl',
			controllerAs: 'converter',
			templateUrl: '/temp/currency-converter.html',
		};
		return directive;
	};
})();