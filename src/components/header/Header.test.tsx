import Header from './Header';
import { render, screen } from '@testing-library/react';


describe("header", () => {
  render(<Header />)
  it("renders properly", () => {
    console.log(screen.debug)
  });

  // test the links
  interface testData {
    description: string,
    testId: string,
    href: string,
  }
  const tests: testData[] = [
    {
      description: "has a link to the about section",
      testId: "aboutLink",
      href: "#about",
    },
    {
      description: "has a link to the projects section",
      testId: "projectsLink",
      href: "#projects",
    },
    {
      description: "has a link to the experience section",
      testId: "experienceLink",
      href: "#experience",
    },
    {
      description: "has a link to the links section",
      testId: "linksLink",
      href: "#links",
    },
  ]
  tests.forEach((test) => {
    it(test.description, () => {
      render(<Header />);
      expect(screen.getByTestId(test.testId).closest("a")?.getAttribute("href")).toStrictEqual(test.href);
    });
  });
});