import api from "./../config/api";
import { IScope, IHttpService } from "angular";
class BlogController {
  title: string;
  blog_detail: Blog;
  constructor($http: IHttpService, $scope: IScope) {
    this.title = "BLog list";
    this.$onInit = function() {
      return $http.get(api("tags")).then(function(res) {
        $scope.blog = res.data.result;
        // console.log(res);
      });
    };
  }
  //ng-click = vm.addBlog()
  addBlog = () => {
    console.log("add new item");
  };
}
class blogComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public controllerAs: any;
  public templateUrl: string;

  constructor() {
    this.bindings = {
      textBinding: "@",
      dataBinding: "<",
      functionBinding: "&"
    };
    this.controller = BlogController;
    this.controllerAs = "vm";
    this.templateUrl = "./app/layout/blog.html";
  }
}
export default blogComponent;
