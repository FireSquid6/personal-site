import PostSummary from "./PostSummary";
import { screen, render } from "@testing-library/react";

it("renders a post summary", () => {
  const props = {
    id: "test-id",
    date: "2021-01-01",
    title: "Test Title",
    description: "Test Description",
  };

  render(<PostSummary {...props} />);

  expect(screen.getByText(props.title)).toBeTruthy();
  expect(screen.getByText(props.description)).toBeTruthy();
});
