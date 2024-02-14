import { Layout } from "inkdocs";
import Root from "../components/root";
import { WritingPage } from "../craftsmen/writing-pages";
import SwapLink from "inkdocs/components/SwapLink";

const WritingHub: Layout = (children, _, artifacts) => {
  const writingPages = artifacts.get("writing-pages") as WritingPage[];

  return (
    <Root>
      <>
        <h1>Stuff I've Written</h1>

        <div>
          {writingPages.map((page) => (
            <SwapLink target="layout" href={page.href}>
              <>
                <h2>{page.title}</h2>
                <p class="italic">{page.description}</p>
              </>
            </SwapLink>
          ))}
        </div>

        <div class="content" id="content">
          {children}
        </div>
      </>
    </Root>
  );
};

export default WritingHub;
