import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load the Contact Us component", () => {
  //render
  render(<ContactUs />);
  //query
  const input = screen.getByText("User Name");
  //Assertions
  expect(input).toBeInTheDocument();
});
