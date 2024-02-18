import Header from "./header";
import Footer from "./footer";

export default function Root({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <body class="flex min-h-[100vh] max-w-[80rem] mx-auto flex-col">
      <Header />
      <main id="layout" class="flex flex-col  mx-8 flex-1 h-full">
        {children}
      </main>
      <Footer />
    </body>
  );
}
