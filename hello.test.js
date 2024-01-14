const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola Munda, les saludo desde Santiago de Chile!");
  });
});
