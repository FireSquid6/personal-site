import { Layout } from "inkdocs";
import Root from "../components/root";

const DefaultLayout: Layout = (children) => {
  return (
    <Root>
      <div class="content" id="content">
        {children}
      </div>
    </Root>
  );
};

export default DefaultLayout;
