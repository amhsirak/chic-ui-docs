---
sidebar_position: 11
---

# Search

Search is a simple component derived from the <i>Text Input</i>
component and <i>Button</i> component.

import { Search } from 'chic-ui';

<>
<Search
placeholder="Search something..."
width="350px"
value=''
/>
</>


```jsx
import { useState } from 'react';
import { Search } from 'chic-ui';

const [value, setValue] = useState('');
<Search
  placeholder="Search something..."
  width="400px"
  value={value}
  onChange={(e) => setValue(e.currentTarget.value)}
/>;
```

### Props

```
import { Search } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>src</td>
    <td>string</td>
    <td></td>
    <td>Path of the image for the avatar</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td></td>
    <td>Alphabets for the avatar</td>
  </tr>
  <tr>
    <td>isActive</td>
    <td>boolean</td>
    <td>false</td>
    <td>Active state for the avatar</td>
  </tr>
</table>
