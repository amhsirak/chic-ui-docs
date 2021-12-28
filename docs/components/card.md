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

```jsx
import React from 'react';
import { CardGroup, Card } from 'chic-ui';

<CardGroup>
<Card
  type="success"
  src="kitten.jpg"
  title="Card 1"
  description="Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod. Lorem ipsum
  dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod."
  footer="Written on 29/12/2021"
/>;

<Card
  type="info"
  src="kitten.jpg"
  title="Card 2"
  description="Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod. Lorem ipsum
  dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod."
  footer="Written on 29/12/2021"
/>;

<Card
  type="danger"
  src="kitten.jpg"
  title="Card 3"
  description="Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod. Lorem ipsum
  dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod."
  footer="Written on 29/12/2021"
/>;
</CardGroup>
```

### Props

```
import { Card } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>'default' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'light'</td>
    <td>Color of the card</td>
  </tr>
  <tr>
    <td>src</td>
    <td>string</td>
    <td></td>
    <td>Add image to the card</td>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td></td>
    <td>Add title to the card</td>
  </tr>
   <tr>
    <td>subTitle</td>
    <td>string</td>
    <td></td>
    <td>Add sub-title to the card</td>
  </tr>
  <tr>
    <td>children</td>
    <td>ReactNode</td>
    <td></td>
    <td>Pass children</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td></td>
    <td>Add description to the card</td>
  </tr>
  <tr>
    <td>footer</td>
    <td>ReactNode</td>
    <td></td>
    <td>Add footer to the card</td>
  </tr>
  <tr>
    <td>href</td>
    <td>string</td>
    <td></td>
    <td>Add links to the card</td>
  </tr>
   <tr>
    <td>hrefText</td>
    <td>string</td>
    <td></td>
    <td>Add texts to links</td>
  </tr>
</table>

```
import { CardGroup } from 'chic-ui';
```
<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>children</td>
    <td>ReactNode</td>
    <td></td>
    <td>Pass children</td>
  </tr>
</table>