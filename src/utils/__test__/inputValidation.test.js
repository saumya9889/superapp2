import { describe, expect, it } from "vitest";
import { emailIsValid, nameIsValid, usernameIsValid } from "../inputValidation";

describe("name validation", () => {
  it("should return false if empty", () => {
    expect(nameIsValid("")).toBe(false);
  });
  it("should return false if only spaces", () => {
    expect(nameIsValid(" ")).toBe(false);
  });
  it("should return false if contain special characters", () => {
    expect(nameIsValid("Yash@ hsa")).toBe(false);
  });
});

describe("emailIsValid", () => {
  it("should return true if email is valid", () => {
    expect(emailIsValid("sdgsag@sdgs.ss")).toBe(true);
  });

  it("should return false if no @ present", () => {
    expect(emailIsValid("sdgsadgA.dgs.sdg")).toBe(false);
  });

  it("should return false if no letters before @ present", () => {
    expect(emailIsValid("@dgs.sdg")).toBe(false);
  });

  it("should return false if no letters after @ and before . present", () => {
    expect(emailIsValid("sdgsag@.sd")).toBe(false);
  });

  it("should return false if no letters after @", () => {
    expect(emailIsValid("sdgsag@")).toBe(false);
  });

  it("should return false if capital letter present", () => {
    expect(emailIsValid("sdgsadg@dg.Adg")).toBe(false);
  });

  it("should return false if 4 or more letters after .", () => {
    expect(emailIsValid("sdgsdg@sds.dgsa")).toBe(false);
  });

  it("should return false if email is empty", () => {
    expect(emailIsValid("")).toBe(false);
  });

  it("should return false if email is null", () => {
    expect(emailIsValid(null)).toBe(false);
  });

  it("should return false if email is undefined", () => {
    expect(emailIsValid(undefined)).toBe(false);
  });

  it("should return false if email is not a string", () => {
    expect(emailIsValid(123)).toBe(false);
  });
});

describe.only("username is valid", () => {
  it("should return true if username is valid", () => {
    expect(usernameIsValid("yash")).toBe(true);
  });
  it("should return false if username is empty", () => {
    expect(usernameIsValid("")).toBe(false);
  });
  it("should return false if username contains only underscore", () => {
    expect(usernameIsValid("____")).toBe(false);
  });
  it("should return false if username contains only numbers", () => {
    expect(usernameIsValid("1234")).toBe(false);
  });
  it("should return false if username contains special characters", () => {
    expect(usernameIsValid("yash@ hsa")).toBe(false);
  });
});
