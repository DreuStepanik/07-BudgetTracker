// Indicate a created AngularJS module to be used.
angular.module('budgetApp', [])
.controller('budgetCtrl', function($scope) {
	$scope.incomes = [];
// created an empty array, which will hold the income amounts entered.
	$scope.newIncome = {};
// created an empty object, which will hold the newly inputted income amounts.
	$scope.expenses = [];
// created an empty array, which will hold the expense amounts entered.
	$scope.newExpense = {};
// created an empty object, which will hold the newly inputted expense amounts.
	$scope.left = [];
// created an empty array to hold the left-over amounts.
	$scope.totalIncome = 0;
// created a variable and place 0 for the starting amount.
	$scope.totalExpenses = 0;
// created a variable and place 0 for the starting amount 
	$scope.totalLeft = 0;
// created a variable and place 0 for the starting amount 

// indicate a functionfor the income to be entered.
	$scope.addIncome = function() {
// take the user's input values, parse the strings into numbers, and then push back into the incomes array.
		$scope.incomes.push({
			amount: parseFloat($scope.newIncome.amount),
			description: $scope.newIncome.text
		});

		$scope.totalIncome += parseFloat($scope.newIncome.amount);
		$scope.totalLeft += parseFloat($scope.newIncome.amount);

// clear the newIncome array after entry, for the user's input.
		$scope.newIncome = {};
		};

// indicate a function for the expenses.
	$scope.addExpense = function() {
// Take the user's expense values, parse the strings into numbers, and then push to the open expenses array.
		$scope.expenses.push({
			amount: parseFloat($scope.newExpense.amount),
			description: $scope.newExpense.text
		});

		$scope.totalExpenses += parseFloat($scope.newExpense.amount);
		$scope.totalLeft -= parseFloat($scope.newExpense.amount);
// clear the newExpenses array after entry, for the user's input.
		$scope.newExpense = {};
	};
	
});