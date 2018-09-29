var angular = require("angular");
// var app = angular.module("app", ["ngComponentRouter"]);
import app from './app/config/app';
import headerComponent from "./app/components/header.component";
import homeComponent from "./app/components/home.component";
import blogComponent from "./app/components/blog.component";
app().component("headerComponent", new headerComponent());
app().component("homeComponent", new homeComponent());
app().component("blogComponent", new blogComponent());
app().value("$routerRootComponent", "app");
app().component("app", {
  template: "<header-component></header-component><ng-outlet></ng-outlet>",
  $routeConfig: [
    { path: "/", component: "homeComponent", name: "Home" },
    { path: "/about", component: "homeComponent", name: "About" }
    { path: "/blogs", component: "blogComponent", name: "Blog" }
  ]
});
