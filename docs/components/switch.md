---
sidebar_position: 15
---

# Switch

Switches can toggle the state of a single setting on or off.
The Switch component is useful when we want users to toggle between any value.

### Checked and Unchecked
Initial state of the switches can be changed using `checked` prop. By default switches are unchecked.

import { Switch } from 'chic-ui';

<>
<Switch />
<Switch checked />
</>

```jsx
import React from 'react';
import { Switch } from 'chic-ui';

<>
<Switch />
<Switch checked />
</>
```
### Toggle between values
Use `useState` hook to make the switches interactive.

```jsx
import React, { useState } from 'react';
import { Switch } from 'chic-ui';

function useSwitch(initial: boolean): [boolean, () => void] {
  const [checked, setChecked] = useState(initial);

  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  return [checked, onChange];
}

export const Checked = () => {
  const [checked, onChange] = useSwitch(true);
  return(
    <>
     <Switch checked={checked} onChange={onChange} type="secondary" />
    </>
  )
}

export const Unchecked = () => {
  const [checked, onChange] = useSwitch(false);
  return(
    <>
     <Switch checked={checked} onChange={onChange} type="danger" />
    </>
  )
}
```

### Types 
Use any of the available switches by changing the `type` prop.

<>
<Switch checked />
<Switch checked type="success"/>
<Switch checked type="secondary"/>
<Switch checked type="warning"/>
<Switch checked type="danger"/>
<Switch checked type="info"/>
<Switch checked type="light"/>
</>

```jsx
import React from 'react';
import { Switch } from 'chic-ui';

<>
<Switch checked />
<Switch checked type="success"/>
<Switch checked type="secondary"/>
<Switch checked type="warning"/>
<Switch checked type="danger"/>
<Switch checked type="info"/>
<Switch checked type="light"/>
</>
```

### Sizes
Get small or large switches easily by using the `size` prop.

<>
<Switch checked size="small" />
<Switch checked type="success" size="default" />
<Switch checked type="danger" size="large" />
</>

```jsx
import React from 'react';
import { Switch } from 'chic-ui';

<>
<Switch checked size="small" />
<Switch checked type="success" size="default" />
<Switch checked type="danger" size="large" />
</>
```

### Padding
Change the padding of the switches using the `padding` prop.

<>
<Switch checked padding="small" />
<Switch checked type="success" padding="default" />
<Switch checked type="danger" padding="large" />
</>

```jsx
import React from 'react';
import { Switch } from 'chic-ui';

<>
<Switch checked padding="small" />
<Switch checked type="success" padding="default" />
<Switch checked type="danger" padding="large" />
</>
```

### Disabled
Use the `disabled` prop to disable any switch.

<>
<Switch checked disabled />
</>

```jsx
import React from 'react';
import { Switch } from 'chic-ui';

<>
<Switch checked disabled />
</>
```

### API

```
import { Switch } from 'chic-ui';
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
    <td>'primary'</td>
    <td>Color of the switch</td>
  </tr>
  <tr>
    <td>size</td>
    <td>'small' | 'default' | 'large'</td>
    <td>'default'</td>
    <td>Size of the switch</td>
  </tr>
  <tr>
    <td>padding</td>
    <td>'small' | 'default' | 'large'</td>
    <td>'default'</td>
    <td>Change padding of switch's toggle</td>
  </tr>
  <tr>
    <td>checked</td>
    <td>boolean</td>
    <td>false</td>
    <td>Checked or unchecked switch</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disable a switch</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>() => void</td>
    <td></td>
    <td>Detects when the value of switch changes</td>
  </tr>
</table>