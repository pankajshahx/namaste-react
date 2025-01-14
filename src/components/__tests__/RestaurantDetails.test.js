import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenuCard from "../RestaurantMenuCard";
import MOCK_DATA from "../mocks/restaurantListData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

it("Should add item to the cart", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantMenuCard menuList={MOCK_DATA} />
        <Header />
        <Cart />
      </Provider>
    </BrowserRouter>
  );
  const addBtn = screen.getAllByTestId("addButton");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  const cartItem = screen.getByText("2");
  expect(cartItem).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "Clear" });
  fireEvent.click(button);

  const newCartItem = screen.getByText("0");
  expect(newCartItem).toBeInTheDocument();
});
