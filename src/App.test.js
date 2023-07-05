import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Counter app ", () => {
  it("it should add 1 when the increment button is clicked", () => {
    cy.visit("/App");
    cy.get("div").contains("button");
  });
});
