import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { navItems } from "./nav-items";

it("displays my name", () => {
  render(<Header />);
  expect(screen.getByText("firesquid")).toBeTruthy();
});
it("shows links to the nav items", () => {
  render(<Header />);
  navItems.forEach((item) => {
    expect(screen.getByText(item.label).getAttribute("href")).toContain(
      item.href
    );
  });
});
