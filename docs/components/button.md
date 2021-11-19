---
sidebar_position: 5
---

# Buttons

Custom buttons with different types and sizes are available.

### Types

Use any of the available buttons by changing the `type` prop.

import { Button } from 'chic-ui';
import { BiWine } from 'react-icons/bi';

<Button className='single'>Default</Button>
<Button type='secondary' className='single'>Secondary</Button>
<Button type='warning' className='single'>Warning</Button>
<Button type='success' className='single'>Success</Button>
<Button type='danger'className='single'>Danger</Button>
<Button type='light'className='single'>Light</Button>

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
<Button size='small' className='single'>Small</Button>
<Button className='single'>Default</Button>
<Button className='single' size='large'>Large</Button>

```jsx
import React from 'react';
import { Button } from 'chic-ui';

<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large">Large</Button>
```

### Disabled Buttons

Use the `disabled` prop to disable any button.
<Button className='single' disabled>Disabled</Button>
<Button className='single' disabled type='success'>Disabled</Button>

```jsx
import React from 'react';
import { Button } from 'chic-ui';

<Button disabled>Disabled</Button>
<Button disabled type='success'>Disabled</Button>
```

### Loading

You can use the buttons to show any loading actions using the `loading` prop.
<Button className='single' loading />
<Button className='single' loading type='secondary'/>

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