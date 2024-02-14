import { Layout } from "inkdocs";
import Root from "../components/root";

const WritingLayout: Layout = (children, metadata) => {
  const date = new Date(metadata.date);
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Root>
      <div id="content">
        <h1 class="text-orange text-5xl">{metadata.title ?? "Untitled"}</h1>
        <p class="text-fg"> {dateString}</p>
        <hr class="my-8" />
        <article class="content">{children}</article>
      </div>
    </Root>
  );
};

export default WritingLayout;
