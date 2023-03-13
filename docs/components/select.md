---
sidebar_position: 12
---

# Select

import { Select } from 'chic-ui';

<>
<Select
width="200px"
data={['India', 'Japan', 'Germany', 'Russia']}
placeholder="Select a country"
/>
</>

```jsx
import React from 'react';
import { Select } from 'chic-ui';

<Select
  width="200px"
  data={['India', 'Japan', 'Germany', 'Russia']}
  placeholder="Select a country"
/>;
```

### Disabled

Use the `disabled` prop to disable any select component.

<>
<Select
disabled
width="200px"
data={['India', 'Japan', 'Germany', 'Russia']}
placeholder="Select a country"
/>
</>

```jsx
import React from 'react';
import { Select } from 'chic-ui';

<Select
  disabled
  width="200px"
  data={['India', 'Japan', 'Germany', 'Russia']}
  placeholder="Select a country"
/>;
```

### Error

Use the `error` prop to display select with error.

<>
<Select
error
width="200px"
data={['India', 'Japan', 'Germany', 'Russia']}
placeholder="Select a country"
/>
</>

```jsx
import React, { useState } from 'react';
import { Select } from 'chic-ui';

<Select
  error
  width="200px"
  data={['India', 'Japan', 'Germany', 'Russia']}
  placeholder="Select a country"
/>;
```

### Simple Multi Select

Select multiple values using `multiSelect` prop.

<>
<Select
multiSelect
width="300px"
data={['India', 'Japan', 'Germany', 'Russia']}
placeholder="Select a country"
/>
</>

```jsx
import React from 'react';
import { Select } from 'chic-ui';

<Select
  multiSelect
  width="300px"
  data={['India', 'Japan', 'Germany', 'Russia']}
  placeholder="Select a country"
/>;
```

### Complex Object

<>
<Select
width="200px"
data={[
{ id: 1, game: 'Hockey' },
{ id: 2, game: 'Football' },
{ id: 3, game: 'Tennis' },
]}
dataKey="id"
dataName="game"
placeholder="Select a sport"
/>
</>

```jsx
import React from 'react';
import { Select } from 'chic-ui';

<Select
  width="200px"
  data={[
    { id: 1, game: 'Hockey' },
    { id: 2, game: 'Football' },
    { id: 3, game: 'Tennis' },
  ]}
  dataKey="id"
  dataName="game"
  placeholder="Select a sport"
/>;
```

### Complex Object Multi Select

<>
<Select
multiSelect
width="300px"
data={[
{ id: 1, game: 'Hockey' },
{ id: 2, game: 'Football' },
{ id: 3, game: 'Tennis' },
]}
dataKey="id"
dataName="game"
placeholder="Select a sport"
/>
</>

```jsx
import React from 'react';
import { Select } from 'chic-ui';

<Select
  multiSelect
  width="300px"
  data={[
    { id: 1, game: 'Hockey' },
    { id: 2, game: 'Football' },
    { id: 3, game: 'Tennis' },
  ]}
  dataKey="id"
  dataName="game"
  placeholder="Select a sport"
/>;
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
    <td>Key for complex objects</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disable Select</td>
  </tr>
  <tr>
    <td>multiSelect</td>
    <td>boolean</td>
    <td>false</td>
    <td>Selects multiple values</td>
  </tr>
  <tr>
    <td>dataName</td>
    <td>string</td>
    <td></td>
    <td>Name for complex objects</td>
  </tr>
  <tr>
    <td>error</td>
    <td>boolean</td>
    <td>false</td>
    <td>Error Select</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td></td>
    <td>Adds placeholder</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>(value: T | T[]) => void</td>
    <td></td>
    <td>Handles value changes</td>
  </tr>
   <tr>
    <td>className</td>
    <td>string</td>
    <td></td>
    <td>Provide external classnames to the component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>React.CSSProperties</td>
    <td></td>
    <td>Override default styling of the component</td>
  </tr>
</table>
