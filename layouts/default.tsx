import { Layout } from "inkdocs";
import Root from "../components/root";

const DefaultLayout: Layout = (children) => {
  return <Root>{children}</Root>;
};

export default DefaultLayout;
