(function() {
	'use strict';
	angular
		.module('app')
		.controller('CurrencyConverterCtrl', CurrencyConverterCtrl);

	CurrencyConverterCtrl.$inject = ['$scope', 'currencyConverterFactory'];

	function CurrencyConverterCtrl($scope,currencyConverterFactory) {
		let vm = this;
		vm.calculate = currencyConverterFactory.calculate;

		activate();

		function activate() {
			return currencyConverterFactory.getCurrency().then(function(data) {
				vm.currency = data;
				console.log(vm.calculate);
			});
		};
		console.log(vm.buy);
		console.log(vm.sell);
	};
})();