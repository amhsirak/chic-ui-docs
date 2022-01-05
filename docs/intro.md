---
sidebar_position: 1
---

# Getting Started

💅 A quick introduction to help you get started with **Chic UI**.

## Installation

**Chic UI** can be installed through NPM. Make sure you have Node already installed on your system

```shell
npm install chic-ui
```

## What is CSS-in-JS?
CSS-in-JS is a styling technique where JavaScript is used to style components. When this JavaScript is parsed, CSS is generated and attached into the DOM. It allows to abstract CSS to the component level itself, using JavaScript to describe styles in a declarative and maintainable way.

Chic UI uses the CSS-in-JS library <a href="https://styled-components.com/">Styled Components</a>

## Import Components

Avoid importing the entire library at once. Single components should be imported in the following manner 

```jsx
import Spinner from "chic-ui/Spinner";
// or
import { Spinner } from "chic-ui";
```

## Default Styling

To make use of the styles provided by Chic UI, wrap all the components inside the `ThemeProvider`.

```jsx
import { ThemeProvider, Button } from "chic-ui";

<ThemeProvider>
<Button> Getting Started! </Button>
</ThemeProvider>
```

And that's it! You can now add Chic UI to your projects 💛
