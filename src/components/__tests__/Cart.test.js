import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import "@testing-library/jest-dom";

it("Should have a clear button", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );
  const button = screen.getByRole("button", { name: "Clear" });
  expect(button).toBeInTheDocument();
});
