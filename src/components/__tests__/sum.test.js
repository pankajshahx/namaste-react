import { sum } from "../sum";

test("Sum of two number", () => {
  const result = sum(4, 7);

  expect(result).toBe(11);
});
