// Code goes here!

class Department {
  static StartedAt = "2000"; // This is the static property which is accessible only by class name not by object...
  protected employees: string[] = []; // This property only accessible in this class and inherited class as well.

  constructor(private name: string, public readonly id: string) {} // Here can create the property like this is well..

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmpInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  description(this: Department) {
    console.log(`Here is the Department:${this.id} :${this.name}`);
  }
}

const accounting = new Department("Accounting", "id");
accounting.description();
accounting.addEmployee("sajid");
accounting.addEmployee("anna");
accounting.printEmpInfo();

// We can access the static class property by class not by object directly...
console.log(Department.StartedAt);

// ------------------------------------tryTo_access_PrivateFields-------------------------------------
// if we have private field then we can not acess directly like this we will get error...
// accounting.employees[2] = "jhon";
// accounting.employees[3] = "carter";
// console.log(accounting.employees.length);
// Here onething is important to understand if we have obj without to name property this will show error.
// Beacuse this will not find any name property which is expecting in description method..
// const marketing = { name: "Marketing", description: accounting.description };
// marketing.description();

// ------------------------------Inheritance👻👻👻👻------------------------------------------------

class iTDepartment extends Department {
  private lastReport: string;
  constructor(public report: string[]) {
    super("ITDepartment", "id2");
    this.lastReport = report[0]; // Here we initiliazing  the last report afterword value can be changed.
  }
  // Getter......
  get lastReportmonth() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw Error("ERROR");
  }
  // Setter.......

  set lastReportmonth(val) {
    if (!val) {
      throw Error("Please enter the valid input..");
    }

    this.addReport(val);
  }

  addReport(text: string) {
    this.report.push(text);
    this.lastReport = text;
  }

  displayReport() {
    console.log(this.report);
  }

  addEmployee(employee: string) {
    if (employee === "sajid") {
      return;
    }

    this.employees.push(employee);
  }
}

const it = new iTDepartment([]);
it.addReport("dasf");
console.log(it.lastReportmonth, "getter>>>>>>>>>"); //Getter fn access like class property...
it.lastReportmonth = " sajid"; // By setter we can set the value to class property variable...
it.addEmployee("sajid");
// it.printEmpInfo();

// we can access baseclass and own methods as well....
it.displayReport();

//--------------------------------- Overriding & Protected--------------------------------------------
// it.addEmployee("sajid");
// it.addEmployee("Max");
// it.printEmpInfo();

// -------------------------------Decorator🐾🐾👌..................................................
function auh(constructor: Function) {
  console.log("User is authenticated...");
  console.log(constructor);
}
@auh
class userData {
  names = "sajid";
  constructor() {
    console.log(` This is the user name:${this.names}`);
  }
}

const user = new userData();
