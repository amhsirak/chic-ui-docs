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

### API

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
