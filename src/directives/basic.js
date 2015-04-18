require(
	[
		"app"
	],
	function(app)
	{
		app.directive('gkGradingCategory', function()
		{
			return {
				restrict: "E",
				transclude: true,
				templateUrl: "directives/views/grading-category.html",
				scope:
				{
					ngModel: "=",
					adminMode: "="
				},
				link: function($scope)
				{
					$scope.DeleteItem = function(item)
					{
						$scope.ngModel.RemoveItem(item);
					};
				}
			};
		})
	}
);