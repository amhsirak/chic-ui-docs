---
sidebar_position: 10
---

# Progress Bar

Progress bars display an indicator showing the completion/progress of a task.

import { ProgressBar } from 'chic-ui';

<>
<ProgressBar progress={80} />
<br />
<ProgressBar progress={80} type="danger" />
</>

```jsx
import React from 'react';
import { ProgressBar } from 'chic-ui';

<>
<ProgressBar progress={80} />
<ProgressBar progress={80} type="danger" />
</>
```

You can hide the progress using `showProgress` prop.

<>
<ProgressBar progress={80} type="success" showProgress='false' />
</>

```jsx
import React from 'react';
import { ProgressBar } from 'chic-ui';

<ProgressBar progress={80} type="success" showProgress='false' />
```

### API

```
import { ProgressBar } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>progress</td>
    <td>number</td>
    <td>70</td>
    <td>Amount of progress</td>
  </tr>
  <tr>
    <td>type</td>
    <td>'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'primary'</td>
    <td>Type of ProgressBar</td>
  </tr>
  <tr>
    <td>showProgress</td>
    <td>boolean</td>
    <td>true</td>
    <td>Show progress number</td>
  </tr>
  <tr>
    <td>animated</td>
    <td>boolean</td>
    <td>false</td>
    <td>Add animation to the ProgressBar</td>
  </tr>
</table>




