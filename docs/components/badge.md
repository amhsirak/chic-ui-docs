---
sidebar_position: 2
---

# Badge

### Badges with Avatars

import { Badge, Avatar } from 'chic-ui';

<>
<Badge type="danger" offset={[-13, 11]} count={3} showCount>
<Avatar src="https://tinyurl.com/yckmvfez" />
</Badge>

<Badge type="success" offset={[-13, 11]} count={0} showZero>
<Avatar src="https://tinyurl.com/yckmvfez" />
</Badge>
</>

```jsx
import React from 'react';
import { Badge, Avatar } from 'chic-ui';

<>
  <Badge type="danger" offset={[-13, 11]} count={3} showCount>
    <Avatar src="cat.png" />
  </Badge>

  <Badge type="success" offset={[-13, 11]} count={0} showZero>
    <Avatar src="cat.png" />
  </Badge>
</>;
```

### API

```
import { Badge } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>count</td>
    <td>number</td>
    <td>0</td>
    <td>Count/Number to be displayed</td>
  </tr>
  <tr>
    <td>limit</td>
    <td>number</td>
    <td></td>
    <td>Numeric limit for the badge</td>
  </tr>
  <tr>
    <td>type</td>
    <td>'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'primary'</td>
    <td>Color of the badge</td>
  </tr>
  <tr>
    <td>showZero</td>
    <td>boolean</td>
    <td>false</td>
    <td>Show count zero on the badge</td>
  </tr>
   <tr>
    <td>showCount</td>
    <td>boolean</td>
    <td>false</td>
    <td>Show count on the badge</td>
  </tr>
  <tr>
    <td>offset</td>
    <td>[number, number]</td>
    <td>[0,0]</td>
    <td>Position of the badge</td>
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
