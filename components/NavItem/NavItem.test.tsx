import { NavItem } from "./NavItem";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  usePathname() {
    return "/about";
  },
}));

it("renders the label with a link to the href", () => {
  render(<NavItem label="About" href="/about" />);
  expect(screen.getByText("About").getAttribute("href")).toContain("/about");
});
it("underlines the link if the current path matches the href", () => {
  render(<NavItem label="About" href="/about" />);
  expect(screen.getByText("About").getAttribute("class")).toContain(
    "underline"
  );
});
it("does not underline the link if the current path does not match the href", () => {
  render(<NavItem label="Projects" href="/projects" />);
  expect(screen.getByText("Projects").getAttribute("class")).not.toContain(
    "underline"
  );
});
