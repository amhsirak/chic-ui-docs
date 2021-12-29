---
sidebar_position: 16
---

# Switch

Switches can toggle the state of a single setting on or off.
The Switch component is useful when we want users to toggle between any value.

### Checked and Unchecked
Initial state of the switches can be changed using `checked` prop. By default switches are unchecked.

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