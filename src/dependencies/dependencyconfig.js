var require = 
    {
        paths:
        {
            "angular": "dependencies/angular/angular.min",
            "angular-route": "dependencies/angular-route/angular-route.min",
            "angular-animate":"dependencies/angular-animate/angular-animate.min",
            "angular-aria":"dependencies/angular-aria/angular-aria.min",
            "angular-material":"dependencies/angular-material/angular-material",
            "angular-dragdrop": "dependencies/angular-plugins/angular-dragdrop",
            "ui-router": "dependencies/angular/angular-ui-router.min",
            "app": "app",
            "domready": "dependencies/require/domready",
            "ui-bootstrap": "dependencies/ui-bootstrap-tpls-0.11.0.min",
            "jquery": "dependencies/jquery/jquery.min",
            "jquery-ui": "dependencies/jquery/jquery-ui",
			"extensions": "dependencies/extensions"
        },
        shim:
        {
            "app":
            {
                deps: ["ui-router", "ui-bootstrap", "angular-material", "angular-route"]
            },
            "ui-router":
            {
                deps: ["angular"]
            },
            "angular": 
            {
                exports: "angular",
                deps: ["jquery", "jquery-ui"]
            },
            "jquery-ui":
            {
                deps: ["jquery"]
            },
            "ui-bootstrap":
            {
                deps: ["angular"]
            },
            "angular-material":
            {
                deps: ["angular", "angular-animate", "angular-aria"]
            },
            "angular-animate":
            {
                deps: ["angular"]
            },
            "angular-aria":
            {
                deps: ["angular"]
            },
            "angular-dragdrop":
            {
                deps: ["angular"]
            },
            "angular-route":
            {
                deps: ["angular"]
            }
        },
        deps:
        [
			"extensions",
            "domready"
        ]
    };