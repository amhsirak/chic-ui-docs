---
sidebar_position: 16
---

# Tag

### Types

Use any of the available Tags by changing the `type` prop.

import { Tag } from "chic-ui";

<>
<Tag>Primary</Tag>
<Tag type="secondary">Secondary</Tag>
<Tag type="danger">Danger</Tag>
<Tag type="success">Success</Tag>
<Tag type="warning">Warning</Tag>
<Tag type="light">Light</Tag>
</>

```jsx
import { Tag } from "chic-ui";

<Tag>Primary</Tag>
<Tag type="secondary">Secondary</Tag>
<Tag type="danger">Danger</Tag>
<Tag type="success">Success</Tag>
<Tag type="warning">Warning</Tag>
<Tag type="light">Light</Tag>
```

### Rounded Tags
Get pill shaped tags using the `rounded` prop.

<>
<Tag rounded>Primary</Tag>
<Tag type="secondary" rounded>Secondary</Tag>
<Tag type="danger" rounded>Danger</Tag>
<Tag type="success" rounded>Success</Tag>
<Tag type="warning" rounded>Warning</Tag>
<Tag type="light" rounded>Light</Tag>
</>

```jsx
import { Tag } from "chic-ui";

<Tag>Primary</Tag>
<Tag type="secondary" rounded>Secondary</Tag>
<Tag type="danger" rounded>Danger</Tag>
<Tag type="success" rounded>Success</Tag>
<Tag type="warning" rounded>Warning</Tag>
<Tag type="light" rounded>Light</Tag>
```

### API

```
import { Tag } from 'chic-ui';
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
    <td>'primary'</td>
    <td>Color of the switch</td>
  </tr>
   <tr>
    <td>rounded</td>
    <td>boolean</td>
    <td>false</td>
    <td>Rounded tags</td>
  </tr>
</table>