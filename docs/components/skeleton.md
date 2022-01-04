---
sidebar_position: 13
---

# Skeleton
Skeletons can be used as a preview for your content before data gets loaded.

### Width and Height
Change the dimensions of the skeleton using the `width` and `height` props.

import { Skeleton } from 'chic-ui';

<>
<Skeleton className='single' />
<Skeleton className='single' width={80} height={60} />
</>

```jsx
import { Skeleton } from 'chic-ui';

<Skeleton />
<Skeleton width={80} height={60} />
```

### Shapes
Get skeletons of any shape by changing the `borderRadius` prop.

<>
<Skeleton className='single' borderRadius='50%' />
<Skeleton className='single' borderRadius='30%' />
</>

```jsx
<Skeleton borderRadius='50%' />
<Skeleton borderRadius='30%' />
```

### API

```
import { Skeleton } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>width</td>
    <td>number</td>
    <td>100</td>
    <td>Width of the skeleton</td>
  </tr>
  <tr>
    <td>height</td>
    <td>number</td>
    <td>100</td>
    <td>Height of the skeleton</td>
  </tr>
  <tr>
    <td>borderRadius</td>
    <td>string</td>
    <td>'none'</td>
    <td>Sets the border radius for the Skeleton</td>
  </tr>
</table>
