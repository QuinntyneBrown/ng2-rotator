"use strict";
var router_1 = require('@angular/router');
var pages_1 = require("../pages");
exports.routes = [
    {
        path: '',
        component: pages_1.HomePageComponent
    }
];
exports.RoutingModule = router_1.RouterModule.forRoot(exports.routes.slice());
exports.routedComponents = [
    pages_1.HomePageComponent
];
//# sourceMappingURL=routing.module.js.map