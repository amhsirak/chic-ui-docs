---
sidebar_position: 13
---

# Select

```jsx
import React, { useState } from 'react';
import { Select } from 'chic-ui';

const [value, setValue] = useState('');
const data = ['India', 'Japan', 'Germany', 'Russia'];

export const SimpleSelect = () => {
  return (
    <Select
      width="200px"
      data={data}
      placeholder="Select a country"
      onChange={(value) => setValue(value)}
    />
  );
};
```

### Disabled

Use the `disabled` prop to disable any select component.

```jsx
import React, { useState } from 'react';
import { Select } from 'chic-ui';

const [value, setValue] = useState('');
const data = ['India', 'Japan', 'Germany', 'Russia'];

export const DisabledSelect = () => {
  return (
    <Select
      disabled
      width="200px"
      data={data}
      placeholder="Select a country"
      onChange={(value) => setValue(value)}
    />
  );
};
```

### Error

Use the `error` prop to display select with error.

```jsx
import React, { useState } from 'react';
import { Select } from 'chic-ui';

const [value, setValue] = useState('');
const data = ['India', 'Japan', 'Germany', 'Russia'];

export const ErrorSelect = () => {
  return (
    <Select
      error
      width="200px"
      data={data}
      placeholder="Select a country"
      onChange={(value) => setValue(value)}
    />
  );
};
```

### Simple Multi Select

Select multiple values using `multiSelect` prop.

```jsx
import React, { useState } from 'react';
import { Select } from 'chic-ui';

const [value, setValue] = useState('');
const data = ['India', 'Japan', 'Germany', 'Russia'];

export const SimpleMultiSelect = () => {
  return (
    <Select
      multiselect
      width="400px"
      data={data}
      placeholder="Select a country"
      onChange={(value) => setValue(value)}
    />
  );
};
```

### Complex Object

```jsx
import React, { useState } from 'react';
import { Select } from 'chic-ui';

const [value, setValue] = useState('');
const data = [
  { id: 1, game: 'Hockey' },
  { id: 2, game: 'Football' },
  { id: 3, game: 'Tennis' },
];

export const ComplexObjectSelect = () => {
  return (
    <Select
      width="400px"
      data={data}
      dataKey="id"
      dataName="game"
      placeholder="Select a sport"
      onChange={(value) => setValue(value)}
    />
  );
};
```

### Complex Object Multi Select

```jsx
import React, { useState } from 'react';
import { Select } from 'chic-ui';

const [value, setValue] = useState('');
const data = [
  { id: 1, game: 'Hockey' },
  { id: 2, game: 'Football' },
  { id: 3, game: 'Tennis' },
];

export const ComplexObjectMultiSelect = () => {
  return (
    <Select
      multiselect
      width="400px"
      data={data}
      dataKey="id"
      dataName="game"
      placeholder="Select a sport"
      onChange={(value) => setValue(value)}
    />
  );
};
```

### API

```
import { Select } from 'chic-ui';
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
    <td>string</td>
    <td>'100%'</td>
    <td>Width of Select</td>
  </tr>
  <tr>
    <td>size</td>
    <td>'small' | 'default' | 'large'</td>
    <td>'default'</td>
    <td>Size of Select</td>
  </tr>
  <tr>
    <td>data</td>
    <td>T[]</td>
    <td></td>
    <td>Data for Select</td>
  </tr>
  <tr>
    <td>datakey</td>
    <td>string</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>multiSelect</td>
    <td>boolean</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>dataName</td>
    <td>string</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>error</td>
    <td>boolean</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>(value: T | T[]) => void</td>
    <td></td>
    <td></td>
  </tr>
</table>
