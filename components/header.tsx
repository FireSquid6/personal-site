import SwapLink from "inkdocs/components/SwapLink";

export default function Header() {
  return (
    <header>
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <SwapLink
            href="/"
            target="layout"
            className="-m-1.5 p-1.5 text-red hover:text-red1"
          >
            firesquid
          </SwapLink>
        </div>
        <div class="flex gap-x-12 ">
          <Link href="/projects">Projects</Link>
          <Link href="/writings">Writings</Link>
          <Link href="https://github.com/firesquid6">GitHub</Link>
        </div>
      </nav>
    </header>
  );
}
function Link({ href, children }: { href: string; children: JSX.Element }) {
  const className =
    "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all text-center align-middle z-10 text-green1 hover:text-green2";

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        class={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <SwapLink target="layout" href={href} className={className}>
      {children}
    </SwapLink>
  );
}
