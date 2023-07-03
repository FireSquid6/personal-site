import Posts from "./page";
import { render, screen } from "@testing-library/react";

jest.mock("../../lib/posts.ts", () => ({
  getSortedPostsData: () => [
    {
      id: "test-id",
      date: "2021-01-01",
      title: "Test Title",
      description: "Test Description",
    },
  ],
}));

it("renders a list of posts", () => {
  render(<Posts />);

  expect(screen.getByText("Test Title")).toBeTruthy();
  expect(screen.getByText("Test Description")).toBeTruthy();
});
