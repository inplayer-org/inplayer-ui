<h1 align="center">
  <a target="_blank" href="https://inplayer-ui.netlify.app/">
    <img src="https://assets.inplayer.com/images/inplayer-256.png" alt="inplayer-ui" title="InPlayer UI" width="300">
    <br />
    <span style="font-size: 1.5rem; color: blue">InPlayer React UI Components</span>
  </a>
</h1>
<p align="center" style="font-size: 1.2rem;">Modern React UI library. Code less, do more.</p>

[![CI]][ci]
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

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k5qqq2797)

### Modifiers

This library utilizes
[`styled-components-modifiers`](https://github.com/Decisiv/styled-components-modifiers) to build
modifiers. Modifiers are small functions that allow us to alter the properties of an Element.
They primarily live in the Element's file and are solely responsible for modifying styles.
Some modifiers are common to multiple Elements. An example would be `fontWeights`.
These common modifiers live in `src/modifiers`

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

### Review

If you'd like to run the linters and tests at once (this is a nice check before pushing to
Github or deploys), you can run:

```
$ yarn review
```

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

[ci]: https://github.com/inplayer-org/inplayer-ui/workflows/CI/badge.svg
[version-badge]: https://img.shields.io/npm/v/@inplayer-org/inplayer-ui.svg?colorB=blue
[package]: https://www.npmjs.com/package/@inplayer-org/inplayer-ui
[license-badge]: https://img.shields.io/npm/l/@inplayer-org/inplayer-ui.svg?style=flat-square
[license]: https://github.com/inplayer-org/inplayer-ui/blob/master/LICENSE
