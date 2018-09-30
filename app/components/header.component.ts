class headerComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public templateUrl: string;

  constructor() {
    this.templateUrl = "./app/layout/header.html";
  }
}
export default headerComponent;
