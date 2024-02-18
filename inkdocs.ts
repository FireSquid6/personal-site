import { InkdocsOptions } from "inkdocs";
import swapRouter from "inkdocs/plugins/swap-router";
import "@kitajs/html/register";
import tailwind from "inkdocs/plugins/tailwind";
import DefaultLayout from "./layouts/default";
import ProjectsLayout from "./layouts/projects";
import LandingLayout from "./layouts/landing";
import WritingHub from "./layouts/writing-hub";
import writingPages from "./craftsmen/writing-pages";
import WritingLayout from "./layouts/writing";

export function getOptions(): InkdocsOptions {
  const baseHtml = `<html>

<head>
  <link rel="stylesheet" href="/styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <script src="/htmx.min.js"></script>
  <script src="https://kit.fontawesome.com/85551023de.js" crossorigin="anonymous"></script>
  <link href="/prism.css" rel="stylesheet"></link>
  <script src="/prism.js"></script>
  <title>FireSquid</title>
</head>
  {slot}
</html>`;

  const options: InkdocsOptions = {
    staticFolder: "static",
    buildFolder: "build",
    contentFolder: "content",
    baseHtml,
    layouts: new Map([
      ["default", DefaultLayout],
      ["projects", ProjectsLayout],
      ["landing", LandingLayout],
      ["writing-hub", WritingHub],
      ["writing", WritingLayout],
    ]),
    craftsmen: [writingPages],
    layoutTree: {
      path: "",
      layoutName: "default",
      children: [
        {
          path: "writings",
          layoutName: "writing",
          children: [],
        },
      ],
    },
    plugins: [
      swapRouter({}),
      tailwind({
        inputFile: "styles.css",
        outputFile: "styles.css",
      }),
    ],
    server: {
      port: 3000,
    },
  };

  return options;
}

const options = getOptions();
export default options;
