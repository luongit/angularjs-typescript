var BlogController = function($http) {
  var vm = this;
  vm.$onInit = function() {
    $http.get("http://localhost:2222/laravel/api/v1/tags").then(function(res) {
      vm.blog = res.data.result;
      console.log(res);
    });
  };
};

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
