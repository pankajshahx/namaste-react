import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import RES_DATA from "../mocks/resCardMockData.json";

it("Should load Restaurant card component", () => {
  //render
  render(<RestaurantCard restaurant={RES_DATA} />);
  //query
  const name = screen.getByText("Wow! Momo");
  //Assertions
  expect(name).toBeInTheDocument();
});
