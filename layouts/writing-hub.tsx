import { Layout } from "inkdocs";
import Root from "../components/root";
import { WritingPage } from "../craftsmen/writing-pages";
import SwapLink from "inkdocs/components/SwapLink";

const WritingHub: Layout = (children, _, artifacts) => {
  const writingPages = artifacts.get("writing-pages") as WritingPage[];

  return (
    <Root>
      <>
        <h1 class="text-center text-red1 mb-16">Stuff I've Written</h1>

        <div class="flex flex-col">
          {writingPages.map((page) => {
            const date = new Date(page.date);
            const dateString = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            let tagString = "";
            for (let i = 0; i < page.tags.length; i++) {
              tagString += page.tags[i];
              if (i < page.tags.length - 1) {
                tagString += ", ";
              }
            }

            return (
              <SwapLink
                target="layout"
                className="mb-12 hover:translate-x-5"
                href={page.href}
              >
                <>
                  <h2 class="text-green1">{page.title}</h2>
                  <p class="text-fg"> {dateString}</p>
                  <p class="text-fg mb-2"> {tagString}</p>
                  <p class="italic text-fg_dark">{page.description}</p>
                </>
              </SwapLink>
            );
          })}
        </div>

        <div class="content" id="content">
          {children}
        </div>
      </>
    </Root>
  );
};

export default WritingHub;
