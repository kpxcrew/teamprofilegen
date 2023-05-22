const Employee = require("../lib/Employee");

test("Create employee object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Get employee name", () => {
  const employee = new Employee("Dean");
  excect(employee.getName()).toBe("Dean");
});

test("Get employee ID", () => {
  const employee = new Employee("Dean", "2");
  excect(employee.getId()).toBe("2");
});

test("Get employee email", () => {
  const employee = new Employee("Dean", "2", "Dean@aol.com");
  excect(employee.getEmail()).toBe("Dean@aol.com");
});

test("Get role of employee", () => {
  const employee = new Employee("Employee");
  expect(employee.getRole()).toBe("Employee");
});
