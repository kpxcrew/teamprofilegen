const Intern = require("../lib/Intern");

test("Create intern object", () => {
  const intern = new Intern();
  expect(typeof intern).toBe("object");
});

test("Get intern's school", () => {
  const intern = new Intern("Princeton");
  excect(intern.getSchool()).toBe("Princeton");
});

test("Get role of employee", () => {
  const intern = new Intern("Intern");
  expect(intern.getRole()).toBe("Intern");
});
