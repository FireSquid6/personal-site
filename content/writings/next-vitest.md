---
title: "Setup Next JS for Test Driven Development"
description: "Use vitest and react testing library to write your unit tests"
tags:
  - "Next.js"
  - "TDD"
date: "2023/07/23"
---

Just wanna get started instantly? A template repo is up at [firesquid6/next-vitest-template](https://github.com/firesquid6/next-vitest-template)

# Create the Next JS Application

Go ahead and skip to the next section if you already have an app

You can create your next app with `create-next-app`:

```
npx create-next-app
```

I'm gonna use the following settings for the tutorial, but the process should be similar regardless of what you choose:

- Typescript - yes
- ESLint - yes
- Tailwind - yes
- src/ - no
- App Router - yes
- No custom import alias

After creating the application, I typically remove the boilerplate in `page.tsx` and `globals.css`, but you don't have to.

# Installing Vitest

Vitest can be installed relatively simply. Just run:

```bash
npm install vitest --save-dev
```

Go ahead and install jsdom as well:

```bash
npm install jsdom --save-dev
```

You will need to edit your package.json to use vitest:

```json
"scripts": {
  "test": "vitest",
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
```

We will also need the react plugin for vite, which we can install with:

```bash
npm install @vitejs/plugin-react --save-dev
```

Now we can define your vitest config. Create `vitest.config.ts` and fill it with the following:

```ts
import { defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
```

You will also need to create a `test.setup.ts` file in your root directory, although there's nothing to put in it yet.

# Installing react testing library

Now we can install react testing library:

```bash
npm install @testing-library/react --save-dev
npm install @testing-library/jest-dom --save-dev
```

To make sure everything works correct, I recommend you create a file named `test.setup.ts` and fill it out with the following:

```ts
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

For this to work properly, you'll need to modify your vitest config and add `test.setup.ts` to your setup files :

```ts
export default defineConfig({
  //...
  test: {
    //...
    setupFiles: ["./test.setup.ts"],
    //...
  },
  //...
});
```

# Writing tests

The test syntax is almost exactly identical to [jest](https://jestjs.io/). Here's a sample component I wrote:

```ts
// Greeter.tsx
export interface GreeterProps {
  name: string;
}

export default function Greeter({ name }: GreeterProps) {
  return (
    <div>
      <p>Hello {name}!</p>
    </div>
  );
}
```

```ts
// Greeter.test.tsx
import Greeter from "@/components/Greeter";
import { render, screen } from "@testing-library/react";

describe("Greeter", () => {
  it("renders a greeting", () => {
    render(<Greeter name="World" />);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });
});
```

You can read more in the [vitest](https://vitest.dev/) docs, as well as the [react testing library](https://testing-library.com/docs/react-testing-library/intro/) docs.

If you ever got stuck, refer to the [template repo](https://github.com/firesquid6/next-vitest-template) I created.
