---
sidebar_position: 3
---

# Breadcrumb

A breadcrumb navigation provides links back to each previous page the user navigated through, and shows the user's current location in a website.

import { Breadcrumb } from 'chic-ui';

<Breadcrumb separator="/">
  <div>
    <a href="https://www.google.com">
      Google
    </a>
  </div>
  <div>
    <a href="https://facebook.com">
      Facebook
    </a>
  </div>
  <div>
    <a href="https://twitter.com">
      Twitter
    </a>
  </div>
</Breadcrumb>

```jsx
import React from 'react';
import { Breadcrumb } from 'chic-ui';

<Breadcrumb separator="/">
  <div>
    <a href="https://www.google.com">Google</a>
  </div>
  <div>
    <a href="https://facebook.com">Facebook</a>
  </div>
  <div>
    <a href="https://twitter.com">Twitter</a>
  </div>
</Breadcrumb>;
```

### API

```
import { Breadcrumb } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>separator</td>
    <td>ReactNode | string</td>
    <td></td>
    <td>Adds a separator between in the links</td>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td></td>
    <td>Provide external classnames to the component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>React.CSSProperties</td>
    <td></td>
    <td>Override default styling of the component</td>
  </tr>
</table>
