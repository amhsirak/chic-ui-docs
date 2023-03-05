# Circular Progress Bar

Circular Progress bars serve the same purpose as simple progress bars, i.e display an indicator showing the completion/progress of a task.

```jsx
import React from 'react';
import { CircularProgressBar } from 'chic-ui';

<CircularProgressBar progress={30} type="primary" showProgress={true} />;
```

You can hide the progress using `showProgress` prop.

```jsx
import React from 'react';
import { ProgressBar } from 'chic-ui';

<ProgressBar progress={80} type="success" showProgress={false} />;
```

### API

```
import { CircularProgressBar } from 'chic-ui';
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
    <td>Type of Circular Progress Bar</td>
  </tr>
  <tr>
    <td>showProgress</td>
    <td>boolean</td>
    <td>true</td>
    <td>Show progress number</td>
  </tr>
</table>
