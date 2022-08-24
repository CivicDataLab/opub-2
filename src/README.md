# src

> Check out the [documentation about the folder structure - unlyed](https://unlyed.github.io/next-right-now/reference/folder-structure)

```
src
├── README.md
├── common
│ ├── components
│ ├── helpers
│ ├── hooks
│ ├── styles
│ └── utils.ts
├── layouts
│ ├── Home
│ └── common
├── modules
└── pages
  ├── api
  ├── _app.tsx
  ├── _document.tsx
  └── index.tsx

```

Common:

- This folder uses an MVC-ish design pattern, where you split your files in separated folders, depending on their kind.
- This folder is great to quickly write some piece of code, you don't need to think a lot about how organized your code should be, and can get started quickly.
- If you don't know or are unsure whether to go for `common` or `modules`, pick `common`. You can always change your mind later.

Layouts:

- You can add custom layouts and use them in your pages right away.
- If there is a layout used by multiple pages, eg: Navbar, put it in `layout/common`.

Modules:

- Modules are a way to organize your code, by putting all related files together, instead of splitting them by "kind".
- You don't need to use modules.
- You should use modules if you feel like it's the right thing to do.
- Don't try to convert everything as a module at once, take it slow, discuss with other team members.
- If you're not sure, use `common` instead, and come back later if needed.

Pages:

[Official documentation](https://nextjs.org/docs/basic-features/pages)

### Native optimisations

Next.js automatically optimise the page client build based on whether they implement `getStaticProps` (SSG) or `getServerSideProps` (SSR).

For instance, all code within `getStaticProps` and `getServerSideProps` is automatically stripped from the browser bundle. But, it's also the case for
top-level `import` that are only used within those functions.

### Visualise bundle optimisation

[https://next-code-elimination.now.sh/](https://next-code-elimination.now.sh/) will help you visualise the difference between the code you write and what's
actually bundled into the client.
