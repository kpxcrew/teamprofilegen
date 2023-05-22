const Engineer = require("../lib/Engineer");

test("Create engineer object", () => {
  const engineer = new Engineer();
  expect(typeof engineer).toBe("object");
});

test("Get engineer name", () => {
  const engineer = new Engineer("Norah");
  excect(engineer.getName()).toBe("Norah");
});

test("Get engineer's github", () => {
  const engineer = new Engineer("Norah", "UnicornsRock");
  excect(employee.getGithub()).toBe("UnicornsRock");
});

test("Get role of employee", () => {
  const engineer = new Engineer("Engineer");
  expect(engineer.getRole()).toBe("Engineer");
});
