import Date from "@/components/Date/Date";
import { render, screen } from "@testing-library/react";

it("renders 2023-07-03", () => {
  render(<Date dateString="2023-07-03" />);
  expect(screen.getByText("Jul 3, 2023")).toBeTruthy();
});
it("renders 2011-12-31", () => {
  render(<Date dateString="2011-12-31" />);
  expect(screen.getByText("Dec 31, 2011")).toBeTruthy();
});
