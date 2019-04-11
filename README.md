<h1 align="center">
  <a target="_blank" href="https://inplayer-org.github.io/inplayer-ui/">
    <img src="https://assets.inplayer.com/images/inplayer-256.png" alt="inplayer-ui" title="InPlayer UI" width="300">
    <br />
    <span style="font-size: 1.5rem; color: blue">InPlayer React UI Components</span>
  </a>
</h1>
<p align="center" style="font-size: 1.2rem;">Modern React UI library. Code less, do more.</p>

[![Build Status][build-badge]][build]
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]

```sh
yarn add @inplayer-org/inplayer-ui styled-components
```

InPlayer UI is a style system / UI library for [React](https://reactjs.org/). It works with [Styled Components 💅](https://www.styled-components.com).

## Up & Running

To install dependencies with Yarn, run:

```sh
$ yarn install
```

or to install with npm, run:

```sh
$ npm install
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ThemeWrapper, Button } from "@inplayer-org/inplayer-ui";

function App() {
  return (
    <ThemeWrapper withProvider={ThemeProvider}>
      <Button size="lg">
        Hello World
      </Button>
    <ThemeWrapper/>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/kkj9nyk5z5)

## File Structure

This component library borrows its structure from [BEM](http://getbem.com/introduction/) and is set
up to use Blocks, Elements, and Modifiers. Below is a description of each.

### Blocks

Blocks are the highest level of abstraction in the Blocks, Elements, Modifiers concept.
They are responsible for providing the context for Elements, handling UI logic, and rendering the
Elements within the Block. They are not connected to application state, nor do they handle any
business logic.

### Elements

Elements are the smallest, indivisible parts of UI. They are responsible for actually rendering the
UI. They do not handle application logic or UI logic, but they do handle their own modifiers which
modify the element’s style. Elements generally exist within the context of a Block (as their own
file in the Block’s directory) allowing the reuse of that set of Elements, but they are not
exclusively bound to blocks. An example of a stand-alone Element would be an A, Link, H3, or P.
These common elements live in `src/elements`.

### Modifiers

This library utilizes
[`styled-components-modifiers`](https://github.com/Decisiv/styled-components-modifiers) to build
modifiers. Modifiers are small functions that allow us to alter the properties of an Element.
They primarily live in the Element's file and are solely responsible for modifying styles.
Some modifiers are common to multiple Elements. An example would be `fontWeights`.
These common modifiers live in `src/modifiers`

### An Example Structure

```
├ src/
├── blocks/
|   ├── Grid
|   |   ├── Cell.js     // <- Element
|   |   ├── Container.js   // <- Element
|   |   └── index.js    // <- Block
|   └── index.js        // <- export for all Blocks
├── elements/
|   ├── Label
|   |   ├── tests
|   |   |   ├── __snapshots__
|   |   |   |   └── index.js.snap   // <- Snapshot Test
|   |   |   └── index.js            // <- Test
|   |   └── index.js                // <- Element
|   ├── Loader
|   |   └── index.js                // <- Element
|   ├── Typography
|   |   └── index.js                // <- Element
|   ├── Icon
|   |   └── index.js                // <- Element
|   └── etc.
|   └── index.js                    // <- export for all Blocks
├── modifiers/
|   ├── fontWeights
|   └── etc.
└── index.js                        // <- main export for the library
```

## Local Development

### Module Development Workflow

Helpful information on development workflow in this library lives
[here](https://gist.github.com/srdjanRakic/139502483b17c3d2d7675d5592ff8d48).

### Linting

\_**NOTE:** The linter will run against everything in the `src` directory.

### JavaScript Linting

To run the linter once:

```
$ yarn lint:js
```

To run the watch task:

```
$ yarn lint:js:watch
```

#### Style Linting

To run the style linter:

```
$ yarn lint:style
```

#### Linting JavaScript & Styles

To run both linters:

```
$ yarn lint
```

### Testing

An initial test suite has been setup with two tests (one passing and one intentionally failing).
We're using Jest Snapshots for our initial test setup, though Enzyme and Expect are also available.
The basic test setup lives in `./tests`. The main configuration for Jest lives at the bottom
of `package.json`. Jest also gives us a test coverage tool for free. The setup is at the bottom of
`package.json`. Everything is set to 90% coverage, but your welcome to update that to whatever
you'd like.

To run the tests once:

```
$ yarn test
```

To run the watch script (for only relevant test files)

```
$ yarn test:watch
```

To run the watch script (for all test files)

```
$ yarn test:watchAll
```

To view the coverage report:

```
$ yarn test:coverage:report
```

### Review

If you'd like to run the linters and tests at once (this is a nice check before pushing to
Github or deploys), you can run:

```
$ yarn review
```

### Prettier

This library uses [Prettier](https://github.com/prettier/prettier) for code consistency. There's a pre-commit hook that will prettier and roll those changes into your commit.

### Docs

This lib uses [react-styleguidist](https://github.com/styleguidist/react-styleguidist) for documenting components. To to view the docs locally, run `yarn styleguide` and visit `http://localhost:6060`. To build a static version, run `yarn styleguide:build`. This static version will be created in `/docs`.

\_**NOTE:** There is a pre-push script in this library that will automatically update the docs when you push to GitHub.

### Build

\_**NOTE:** When you run `build`, Babel will create a `build` directory.

Run once:

```
$ npm/yarn run build
```

Run the watch script:

```
$ npm/yarn run build:watch
```

_**NOTE:** the build script runs in the `prepublishOnly` script just before you publish to npm._

## Contributing

We are thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines](https://github.com/inplayer-org/inplayer-ui/blob/master/.github/CONTRIBUTING.md).

## License

Licensed under the MIT License, Copyright © 2018-present InPlayer.

See [LICENSE](https://github.com/inplayer-org/inplayer-ui/blob/master/LICENSE) for more information.

[build-badge]: https://travis-ci.org/inplayer-org/inplayer-ui.svg?branch=dev
[build]: https://travis-ci.org/inplayer-org/inplayer-ui
[version-badge]: 	https://img.shields.io/npm/v/@inplayer-org/inplayer-ui.svg?colorB=blue
[package]: https://www.npmjs.com/package/@inplayer-org/inplayer-ui
[license-badge]: https://img.shields.io/npm/l/@inplayer-org/inplayer-ui.svg?style=flat-square
[license]: https://github.com/inplayer-org/inplayer-ui/blob/master/LICENSE
