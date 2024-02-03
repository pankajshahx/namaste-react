import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should have item zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(0);
  expect(cartItems).toBeInTheDocument();
});
