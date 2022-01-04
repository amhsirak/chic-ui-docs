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
