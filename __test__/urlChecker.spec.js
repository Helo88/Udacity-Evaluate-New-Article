import { checkForURL } from "../src/client/js/urlChecker";

describe("Testing if URL has a correct syntax", () => {
  test("Testing the checkForName() function", () => {
    expect(checkForURL("https://jamesclear.com/dont-start-from-scratch")).toBe(
      true
    );
    expect(checkForURL("https://jamesclear.com/beginners-guide-deliberate-practicee")).toBe(true);
    expect(checkForURL("url")).toBe(false);
    expect(checkForURL(" ")).toBe(false);
  });
});
