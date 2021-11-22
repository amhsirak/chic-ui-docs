---
sidebar_position: 2
---

# Avatar

### Image Avatars

Get image avatars by simply using the `src` prop.

import { Avatar } from 'chic-ui';

<>
    <Avatar className='single' src='https://wallpaperaccess.com/full/32048.jpg' />
    <Avatar className='single' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNO3U161Gmfn4tpmvDt3j-5wQlY4CsKulAw&usqp=CAU' />
    <Avatar className='single' src='https://i.pinimg.com/originals/75/a0/5d/75a05da75d10f296932d060773fe7447.jpg' />
</>

```jsx
import React from 'react';
import { Avatar } from 'chic-ui';

<Avatar src="cat1.png" />
<Avatar src="cat2.png" />
<Avatar src="cat3.png" />
```

### Lettered Avatars

Get lettered avatars by simply using the `name` prop.

<>
<Avatar name="KS" />
<Avatar name="D" />
</>

```jsx
import React from 'react';
import { Avatar } from "chic-ui";
<Avatar name="KS" />
<Avatar name="D" />
```

### Active Avatars

`isActive` prop can be used to show active avatars.
<>
<Avatar className='single' name='KS' isActive />
<Avatar className='single' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNO3U161Gmfn4tpmvDt3j-5wQlY4CsKulAw&usqp=CAU' isActive />
</>

```jsx
import React from 'react';
import { Avatar } from 'chic-ui';

<Avatar name="KS" isActive />
<Avatar src="cat2.png" isActive />
```

### Props

```
import { Avatar } from 'chic-ui';
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
