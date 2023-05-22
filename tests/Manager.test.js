const Manager = require("../lib/Manager");

test("Create manager object", () => {
  const manager = new Manager();
  expect(typeof manager).toBe("object");
});

test("Get office number", () => {
  const manager = new Manager("1");
  excect(intern.getSchool()).toBe("1");
});

test("Get role of employee", () => {
  const manager = new Manager("Manager");
  expect(manager.getRole()).toBe("Manager");
});
