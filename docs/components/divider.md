---
sidebar_position: 7
---

# Divider

Dividers are horizontal lines used to separate content on a web page.

```jsx
import React from 'react';
import { Divider } from 'chic-ui';

<>
 <Divider />
 <Divider type="danger" />
 <Divider type="info" />
 <Divider type="light" />
 <Divider type="secondary" />
 <Divider type="success" />
 <Divider type="warning" />
<>
```

### Dashed Divider

```jsx
import React from 'react';
import { Divider } from 'chic-ui';

<>
 <Divider dashed />
 <Divider type="danger" dashed />
 <Divider type="info" dashed />
 <Divider type="light" dashed />
 <Divider type="secondary" dashed />
 <Divider type="success" dashed />
 <Divider type="warning" dashed />
<>
```

### Props

```
import { Divider } from 'chic-ui';
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
    <td>'secondary'</td>
    <td>Type of Divider</td>
  </tr>
  <tr>
    <td>dashed</td>
    <td>boolean</td>
    <td>false</td>
    <td>Get dashed style dividers</td>
  </tr>
</table>
