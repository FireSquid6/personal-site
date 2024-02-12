import Header from "./header";
import Footer from "./footer";

export default function Root({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <body class="flex min-h-[100vh] flex-col">
      <Header />
      <main id="layout" class="flex flex-row justify-between flex-1 h-full">
        {children}
      </main>
      <Footer />
    </body>
  );
}
