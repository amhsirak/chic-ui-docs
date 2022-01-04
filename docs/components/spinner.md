---
sidebar_position: 14
---

# Spinner
Custom spinners with different types and sizes are available.

### Types

Use any of the available spinners by changing the `type` prop.

import { Spinner } from 'chic-ui';

<>
<Spinner className='single' type='light' />
<Spinner className='single' type='primary' />
<Spinner className='single' type='secondary' />
<Spinner className='single' type='danger' />
<Spinner className='single' type='success' />
<Spinner className='single' type='warning' />
<Spinner className='single' type='info' />
</>

```jsx
import { Spinner } from 'chic-ui';

<Spinner type='light' />
<Spinner type='primary' />
<Spinner type='secondary' />
<Spinner type='danger' />
<Spinner type='success' />
<Spinner type='warning' />
<Spinner type='info' />
```

### Sizes 

The size of the spinners can be changed by passing a number to the `size` prop.

<>
<Spinner className='single' type='success' size={65} />
<Spinner className='single' size={40} />
</>

```jsx
import { Spinner } from 'chic-ui';
<Spinner type='success' size={65} />
<Spinner size={40} />
```

### API

```
import { Spinner } from 'chic-ui';
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
    <td>'light'</td>
    <td>Color of the spinner</td>
  </tr>
  <tr>
    <td>size</td>
    <td>'small' | 'default' | 'large'</td>
    <td>'default'</td>
    <td>Size of the spinner</td>
  </tr>
</table>
