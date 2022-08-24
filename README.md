<h1 align="center">OPub</h1>
<p align="center">
<a href="https://github.com/CivicDataLab/opub/blob/main/LICENSE">
<img alt="MIT License" src="https://img.shields.io/apm/l/atomic-design-ui.svg?"/>
</a>&nbsp;&nbsp; 
<a href="https://github.com/CivicDataLab/opub/actions/workflows/node.js.yml">
<img alt="MIT License" src="https://github.com/CivicDataLab/opub/actions/workflows/node.js.yml/badge.svg"/>
</a>
</p>
<p align="center">A platform to speed up the development of open data dashboards.</p>

- [Features](#features)
- [Getting Started](#getting-started)
- [Guide](#guide)
  - [Styling](#styling)
  - [Backend](#backend)
  - [Pages](#pages)
  - [Directory Structuce](#directory-structuce)
  - [Data fetching](#data-fetching)
    - [Pre-fetch data in the server-side](#pre-fetch-data-in-the-server-side)
  - [ESLint](#eslint)
- [Developers](#developers)
  - [Boot the local instance](#boot-the-local-instance)
  - [Architecture](#architecture)
- [Contributing](#contributing)

## Features

- ♿ Accessible: The platform is screen-reader friendly and keyboard accessible.
- 👩‍💻 Developer friendly: built with NextJS, CSS-in-JS, and REST API to make the developer experience a treat.
- 🚀 StitchesJs: CSS-in-JS to get styling on steroids with fantastic developer experience.
- 📋 Typescript: Developed using typescript to improve development experience by catching errors and providing fixes.
- 🧱 Extensible: quickly extend and develop/import your own React components
- 📝 Well documented: complete set of documentation plus the documentation of NextJS

## Getting Started

- Install a recent version of Node.
- After cloning the repo, create an `.env.local` file in the root of directory.
- If using VSCode, install the recommened extensions.

## Guide

### Styling

This project uses [Stitchesjs](https://github.com/stitchesjs/stitches) to handle all of the stylings. It provides lots of features to improve the developer experience.

To make the styling scalable, we use a `stitches.config.ts` file in the root directory. It contains all the colors and gradients, etc from the Design System.

### Backend

The project requires a CKAN URL to fetch datasets. You can save them in the `.env.local` file in the following format. [Read more about env](https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables).

> We can also pass a Google Analytics Id in the same file
>
> We also need a KEYCLOAK_URL in the env file for authentication to work

```js
CKAN_URL = 'CKAN_URL/api/3/action';
NEXT_PUBLIC_GOOGLE_ANALYTICS = '';
KEYCLOAK_URL = 'http://localhost:8080';
```

### Pages

[Official documentation](https://nextjs.org/docs/basic-features/pages)

Directory is available at `/src/pages` and by default contains these pages:

- Home `/index.tsx`
- Datasets `/datasets`
- Datasets Explorer `/datasets/[explorer]`

### Directory Structure

OPub uses `/src` to store code instead of root directory. [Official documentation](https://nextjs.org/docs/advanced-features/src-directory).

It is done to keep the root level clean and make the repo more scalable. [Check out src README](/src/README.md) to learn more about the structure.

### Data fetching

The project uses [REST APIs provided by CKAN]('http://docs.ckan.org/en/2.9/api/') to access, filter, sort, and search datasets.

We can find data fetching functions at `/utils/fetch.ts.` [Read more in utils](/utils/README.md)

#### Pre-fetch data in the server-side

When visiting a page, you may want to fetch the data on the server side. To do so, you can use `getServerSideProps` function from NextJS:

```javascript
import { GetServerSideProps } from 'next';
import { stateSchemeFetch } from 'utils/fetch';

...

export const getServerSideProps: GetServerSideProps = async (context) => {
  export const getServerSideProps: GetServerSideProps = async () => {
  const stateData = await stateSchemeFetch();

  return {
    props: {
      stateData,
    },
  };
};
};
```

### ESLint

The project uses the ESLint config provided by Next.js, [eslint-config-next]('https://nextjs.org/docs/basic-features/eslint'). We can modify the rules on a project basis in the `.eslintrc.js` file.

## Developers

### Boot the local instance

Install the dependencies:

```bash
npm i
```

Boot the demo frontend:

```console
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the home page 🎉

You can start editing the page by modifying `/pages/index.tsx`. The page auto-updates as you edit the file.

### Architecture

- Language: Javascript
- Framework: [Next.js](https://nextjs.com/)
- Styling: [styled-components](https://github.com/styled-components/styled-components/)

## Contributing

For any new feature or bug reports, please request them in [issues](https://github.com/CivicDataLab/opub/issues).

See [CONTRIBUTING.md](https://github.com/CivicDataLab/opub/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to [Code of Conduct](https://github.com/CivicDataLab/opub/blob/main/CODE_OF_CONDUCT.md).
