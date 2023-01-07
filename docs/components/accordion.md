---
sidebar_position: 19
---

# Accordion
The accordion component enables the user to show and hide sections of content on a page.

```jsx
import React from 'react';
import { Accordion } from 'chic-ui';

<>
 <Accordion header="Header" description="Content" />
</>
```

### API

```
import { Accordion } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>header (required)</td>
    <td>string</td>
    <td></td>
    <td>Header of the Accordion</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td></td>
    <td>Content enclosed inside accordion</td>
  </tr>
    <tr>
    <td>className</td>
    <td>string</td>
    <td></td>
    <td>Provide external classnames to the component</td>
  </tr>
</table>