---
sidebar_position: 20
---

# Alert

Alert component can be used to display alerts, notifications and other feedback messages to the user

```jsx
import React from 'react';
import { Alert } from 'chic-ui';

<></>;
```

### API

```
import { Alert } from 'chic-ui';
```

<!-- TODO : show prop -->

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
    <td>Type of alert</td>
  </tr>
  <tr>
    <td>title (required)</td>
    <td>string</td>
    <td></td>
    <td>Title of the alert</td>
  </tr>
    <tr>
    <td>message (required)</td>
    <td>string</td>
    <td></td>
    <td>Message of the alert</td>
  </tr>
  <tr>
    <td>dismissible</td>
    <td>boolean</td>
    <td>false</td>
    <td>Boolean flag to allow dismissing the alert</td>
  </tr>
   <tr>
    <td>onClose</td>
    <td>function</td>
    <td></td>
    <td>Specify a function that will be called when the message is closed</td>
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
