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
            className="-m-1.5 p-1.5 text-red hover:text-red1 text-lg"
          >
            firesquid
          </SwapLink>
        </div>
        <div class="flex gap-x-12 ">
          <Link icon="" href="/projects">
            Projects
          </Link>
          <Link icon="󰷈" href="/writings">
            Writings
          </Link>
          <Link icon="󰊤" href="https://github.com/firesquid6">
            GitHub
          </Link>
        </div>
      </nav>
    </header>
  );
}
function Link({
  href,
  children,
  icon,
}: {
  href: string;
  icon: string;
  children: JSX.Element;
}) {
  const className =
    "-mx-3 rounded-lg px-1 md:px-3 py-2 text-base font-semibold leading-7 transition-all text-center align-middle z-10 text-green1 hover:text-green2 flex flex-row";

  const inner = (
    <>
      <span class="text-xl mr-4">{icon}</span>
      <span class="hidden md:block">{children}</span>
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        class={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  return (
    <SwapLink target="layout" href={href} className={className}>
      {inner}
    </SwapLink>
  );
}
