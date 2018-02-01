//HEAD 
(function(app) {
try { app = angular.module("_html_"); }
catch(err) { app = angular.module("_html_", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("views/home.html","<div class=\"starter-template\">\n" +
    "  <h1>Angularjs starter template</h1>\n" +
    "  <p class=\"lead\">Use this repository as a way to quickly start any new project.<br> All you get is Angularjs + Bootstrap 4 project.</p>\n" +
    "</div>\n" +
    "")
}]);
})();