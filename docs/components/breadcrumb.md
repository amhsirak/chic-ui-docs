---
sidebar_position: 4
---

# Breadcrumb

A breadcrumb navigation provides links back to each previous page the user navigated through, and shows the user's current location in a website.


```jsx
import React from 'react';
import { Avatar } from 'chic-ui';

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
```