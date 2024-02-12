import { Layout } from "inkdocs";
import Root from "../components/root";

const DefaultLayout: Layout = (children) => {
  return (
    <Root>
      <div id="layout">
        <div id="content">{children}</div>
      </div>
    </Root>
  );
};

export default DefaultLayout;
