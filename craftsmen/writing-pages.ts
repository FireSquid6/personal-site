import { Craftsman } from "inkdocs";

export interface WritingPage {
  title: string;
  description: string;
  date: string;
  tags: string[];
  href: string;
  image?: string;
}
const writingPages: Craftsman = (_, routes) => {
  const pages: WritingPage[] = [];

  for (const route of routes) {
    const split = route.href.split("/");
    while (split[0] === "") {
      split.shift();
    }

    if (!(split[0] === "writings" && split.length > 1)) {
      continue;
    }

    pages.push({
      title: route.metadata.title ?? "Untitled",
      description: route.metadata.description ?? "No description",
      date: route.metadata.date ?? "01/01/1970",
      tags: route.metadata.tags ?? [],
      image: route.metadata.image,
      href: route.href,
    });
  }

  pages.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });

  return {
    name: "writing-pages",
    data: pages,
  };
};

export default writingPages;
