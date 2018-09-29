class homeComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public templateUrl: string;

  constructor() {
    this.bindings = {
      textBinding: "@",
      dataBinding: "<",
      functionBinding: "&"
    };
    // this.controller = SomeComponentController;
    this.templateUrl = "./app/layout/home.html";
  }
}
export default homeComponent;
