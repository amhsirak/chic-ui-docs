---
sidebar_position: 6
---

# Divider

Dividers are horizontal lines used to separate content on a web page.

import { Divider } from 'chic-ui';

<>
<Divider />
<Divider type="danger" />
<Divider type="info" />
<Divider type="light" />
<Divider type="primary" />
<Divider type="success" />
<Divider type="warning" />
</>

```jsx
import React from 'react';
import { Divider } from 'chic-ui';

<>
  <Divider />
  <Divider type="danger" />
  <Divider type="info" />
  <Divider type="light" />
  <Divider type="primary" />
  <Divider type="success" />
  <Divider type="warning" />
</>;
```

### Dashed Divider

<>
<Divider dashed />
<Divider type="danger" dashed />
<Divider type="info" dashed />
<Divider type="light" dashed />
<Divider type="primary" dashed />
<Divider type="success" dashed />
<Divider type="warning" dashed />
</>

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
</>;
```

### Custom Thickness

<>
<Divider type="danger" dashed thickness={2} />
<Divider type="info" thickness={2} />
</>

```jsx
import React from 'react';
import { Divider } from 'chic-ui';

<>
  <Divider type="danger" dashed thickness={2} />
  <Divider type="info" thickness={2} />
</>;
```

### API

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
    <td>'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'secondary'</td>
    <td>Type of Divider</td>
  </tr>
  <tr>
    <td>dashed</td>
    <td>boolean</td>
    <td>false</td>
    <td>Get dashed style dividers</td>
  </tr>
   <tr>
    <td>thickness</td>
    <td>number</td>
    <td>0.5</td>
    <td>Sets thickness of divider</td>
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
