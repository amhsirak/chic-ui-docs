---
sidebar_position: 18
---

# Toast

Toasts can be used to provide response / feedback for certain user actions.

### Examples

import { toast } from 'chic-ui';

<>
<button
onClick={() =>
toast.open({
title: 'FAILED TO LOGIN 😔',
message: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum??? Lorem ipsum.',
type: 'danger',
duration: 5000
})
} >
Show toast
</button>
</>

```jsx
import { toast } from 'chic-ui';

<button
  onClick={() =>
    toast.open({
      title: 'FAILED TO LOGIN 😔',
      message: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum??? Lorem ipsum.',
      type: 'danger',
      duration: 5000,
    })
  }
>
  Show toast
</button>;
```

### API

```
import { Toast } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>id (required)</td>
    <td>string</td>
    <td></td>
    <td>Unique ID for the toast</td>
  </tr>
   <td>type</td>
    <td>'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'primary'</td>
    <td>Color of Toast </td>
  <tr>
    <td>close</td>
    <td>() => void</td>
    <td></td>
    <td>Destroy Toast</td>
  </tr>
  <tr>
    <td>title (required)</td>
    <td>string</td>
    <td></td>
    <td>Title of Toast</td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td></td>
    <td>Adds description of Toast</td>
  </tr>
  <tr>
    <td>duration</td>
    <td>number</td>
    <td>0</td>
    <td>Time(ms) to keep toast active</td>
  </tr>
   <tr>
    <td>icon</td>
    <td>ElementType</td>
    <td></td>
    <td>Add icons to Toast</td>
  </tr>
</table>

