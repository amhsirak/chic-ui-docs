---
sidebar_position: 6
---

# Card

```jsx
import React from 'react';
import { Card } from 'chic-ui';

<Card
  type="secondary"
  title="Title"
  subTitle="Subtitle"
  description="Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod. Lorem ipsum
  dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod."
  footer="Footer"
  href="https://github.com/karishmashuklaa/chic-ui"
  hrefText="Visit site"
/>;
```

### Add Image to Card

Use the `src` prop to add an image to a card in the following manner

```jsx
import React from 'react';
import { Card } from 'chic-ui';

<Card
  type="secondary"
  src="kitten.jpg"
  title="Title"
  subTitle="Subtitle"
  description="Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod. Lorem ipsum
  dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod."
  footer="Footer"
  href="https://github.com/karishmashuklaa/chic-ui"
  hrefText="Visit site"
/>;
```

### CardGroups

Mutiple cards can be wrapped together in the `<CardGroup />` component
