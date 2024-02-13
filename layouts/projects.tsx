import { Layout } from "inkdocs";
import Root from "../components/root";

const ProjectsLayout: Layout = (children, metadata) => {
  return (
    <Root>
      <div id="layout">
        <div id="content">{metadata}</div>
      </div>
    </Root>
  );
};

export default ProjectsLayout;
