LoadCss(["content/css/stylesheet.css", "content/css/fontello.css"]);

define(
    [
        "angular",
        "ui-router",
        "ui-bootstrap",
		"services/user-service.js"
    ],
    function(angular)
    {
		try
		{
			return angular.module("gradera-klubb");
		}
		catch(err)
		{
			return angular.module('gradera-klubb', ['ng', 'ui.router', 'ui.bootstrap', 'ngMaterial'])
				.controller('index', ["$scope", "$state", "user-service", function($scope, $state, userService)
				{
					$scope.UserService = userService;
					$scope.AdminLinks = [];

					$scope.SetActiveNav = function(element)
					{
						$("md-sidenav").find('.active').each(function()
						{
							$(this).removeClass('active');
						});

						$(element.target.parentElement).addClass("active");
					};

					if(userService.User.IsLoggedIn)
						$state.go ('homebasic');
					else
						$state.go("home");

					if($scope.UserService.User.AccessLevel == 1)
					{
						$scope.AdminLinks = [
							{
								Sref: "settingsadmin",
								Text: "Inställningar"
							},
							{
								Sref: "gradingadmin",
								Text: "Graderingsbestämmelser"
							},
							{
								Sref: "competitionsadmin",
								Text: "Tävlingar"
							},
							{
								Sref: "",
								Text: "Hantera medlemar"
							}
						];
					}
				}])
				.config([
					"$compileProvider",
					"$httpProvider",
					"$mdThemingProvider",
					function($compileProvider, $httpProvider, $mdThemingProvider)
					{
						$compileProvider.debugInfoEnabled(false);
						$httpProvider.useApplyAsync(true);

						$mdThemingProvider.theme('default')
							.primaryPalette('brown')
							.accentPalette('orange');
					}
				]);
		}
    });