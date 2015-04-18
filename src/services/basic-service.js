require(
	[
		"app"
	],
	function(app)
	{
		app.service('grading-service', ["$http", function($http)
		{
			this.GetTabData = function(clubId)
			{
				return $http.get(String.format("http://localhost:15646/api/basic/GetGradingTabs/{0}", clubId));
			};
		}]);
	}
);