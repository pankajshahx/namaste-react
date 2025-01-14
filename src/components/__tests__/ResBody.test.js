import { fireEvent, render, screen } from "@testing-library/react";
import ResBody from "../ResBody";
import MOCK_DATA_FOR_RES from "../mocks/resBodyData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_FOR_RES);
    },
  });
});

it("Should search the restaurant list", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <ResBody />
      </BrowserRouter>
    )
  );

  const allResCards = screen.getAllByTestId("res-card");
  expect(allResCards.length).toBe(9);
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "pizza" } });

  const filteredCards = screen.getAllByTestId("res-card");
  expect(filteredCards.length).toBe(2);
});
