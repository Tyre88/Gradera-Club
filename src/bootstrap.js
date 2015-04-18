require(
    [
        "angular",
        "app",
        "./routing.js",
		"./adminrouting.js",
		"./controllers/admin.js",
		"./controllers/home.js",
		"./controllers/basic.js",
		"./directives/login.js"
    ],
    function(angular)
    {
        require(["domready!"], function(document)
                {
                    return angular.bootstrap(document, ["gradera-klubb"]);
                });
    });