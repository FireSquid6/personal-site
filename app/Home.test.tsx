import Home from "./page";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("should render", () => {
    render(<Home />);
  });
});
