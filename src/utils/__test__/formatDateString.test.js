import { describe, expect, it } from "vitest";
import { formatDateString } from "../formatDateString";

describe("date format test", () => {
  it("should match", () => {
    let date = "2023-09-26T13:00:00Z";
    expect(formatDateString(date)).toEqual({
      date: "26-09-2023",
      time: "1:00 PM",
    });
  });
});
