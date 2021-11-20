---
sidebar_position: 5
---

# Button

Custom buttons with different types and sizes are available.

### Types

Use any of the available buttons by changing the `type` prop.

import { Button } from 'chic-ui';
import { BiWine } from 'react-icons/bi';
<>
<Button className='single'>Default</Button>
<Button type='secondary' className='single'>Secondary</Button>
<Button type='warning' className='single'>Warning</Button>
<Button type='success' className='single'>Success</Button>
<Button type='danger'className='single'>Danger</Button>
<Button type='light'className='single'>Light</Button>
</>

```jsx
import React from 'react';
import { Button } from 'chic-ui';

<Button>Default</Button>
<Button type='secondary'>Secondary</Button>
<Button type='warning'>Warning</Button>
<Button type='success'>Success</Button>
<Button type='danger'>Danger</Button>
<Button type='light'>Light</Button>
```

### Sizes

Get small or large buttons easily by using the `size` prop.
<>
<Button size='small' className='single'>Small</Button>
<Button className='single'>Default</Button>
<Button className='single' size='large'>Large</Button>
</>

```jsx
import React from 'react';
import { Button } from 'chic-ui';

<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large">Large</Button>
```

### Disabled Buttons

Use the `disabled` prop to disable any button.
<>
<Button className='single' disabled>Disabled</Button>
<Button className='single' disabled type='success'>Disabled</Button>
</>

```jsx
import React from 'react';
import { Button } from 'chic-ui';

<Button disabled>Disabled</Button>
<Button disabled type='success'>Disabled</Button>
```

### Loading

You can use the buttons to show any loading actions using the `loading` prop.
<>
<Button className='single' loading />
<Button className='single' loading type='secondary'/>
</>

```jsx
import React from 'react';
import { Button } from 'chic-ui';

<Button loading />
<Button loading type='secondary'/>
```

### Icons

Icons can be used within the buttons either by using `icon`
prop or as `children.`
<>
<Button className='single' icon={BiWine} type="light">
White wine!
</Button>
<Button className='single' type='danger'>
Red wine! <BiWine color="white" />
</Button>
</>

```jsx
import React from 'react';
import { Button } from 'chic-ui';

<Button icon={BiWine} type="light">
White wine!
</Button>

<Button type='danger'>
Red wine! <BiWine color="white" />
</Button>
```

### Props

```
import { Button } from 'chic-ui';
```

<table>
  <tr>
     <td>Name</td>
     <td>Type</td>
     <td>Default</td>
     <td>Description</td>
  </tr>
  <tr>
    <td>type</td>
    <td>'default' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'default'</td>
    <td>Color of the button</td>
  </tr>
  <tr>
    <td>size</td>
    <td>'small' | 'default' | 'large'</td>
    <td>'default'</td>
    <td>Size of the button</td>
  </tr>
  <tr>
    <td>icon</td>
    <td>ElementType</td>
    <td></td>
    <td>Add icons to the buttons</td>
  </tr>
  <tr>
    <td>children</td>
    <td>ReactNode</td>
    <td></td>
    <td>Pass children</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disable a button</td>
  </tr>
  <tr>
    <td>loading</td>
    <td>boolean</td>
    <td>false</td>
    <td>Loading button</td>
  </tr>
  <tr>
    <td>href</td>
    <td>string</td>
    <td></td>
    <td>If `href` is added, button becomes an anchor link</td>
  </tr>
  <tr>
    <td>as</td>
    <td>ElementType</td>
    <td></td>
    <td>If `as` is added, button becomes a custom html node specified in `as`</td>
  </tr>
</table>
