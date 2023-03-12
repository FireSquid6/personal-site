import About from "./About";
import { render, screen } from '@testing-library/react';

describe("test about component", () => {
  it("contains text passed to it", () => {
    const title="Jonathan Deiss"
    const subtitle = "Amazing tester"

    render(<About title={title} subtitle={subtitle} />)
    expect(screen.getByText(title)).toBeTruthy()
    expect(screen.getByText(subtitle)).toBeTruthy()
  })
});