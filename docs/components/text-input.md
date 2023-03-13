---
sidebar_position: 17
---

# Text Input

### Sizes and Width

Get small to large text inputs easily by using the `size` prop.
Text Inputs are block elements. You can change the width of them using the `width` prop.

import { TextInput } from 'chic-ui';
import { FaUserAlt } from 'react-icons/fa';

<>
<TextInput placeholder='Type something...' size='large' />
<br />
<TextInput placeholder='Type something...' width='300px' size='small'/>
</>

```jsx
import { TextInput } from 'chic-ui';

<TextInput placeholder='Type something...' size='large' />
<TextInput placeholder='Type something...' width='300px' size='small'/>
```

### Icons

Use icons within the text input using the `icon` prop.
<>

<TextInput className='single' placeholder='Enter Full Name' icon={FaUserAlt} />
</>

```jsx
import { TextInput } from 'chic-ui';

<TextInput className="single" placeholder="Enter Full Name" icon={FaUserAlt} />;
```

### Types

Text Inputs can have `error`, `disabled` and `readonly` types.

<>
<TextInput placeholder="Errorrrr Eroooorrr!" width="400px" error />
<br />
<TextInput placeholder="Disabled Input 😴" width="400px" disabled />
<br />
<TextInput placeholder="You can only read me 😈" width="400px" readonly />
</>

```jsx
import { TextInput } from "chic-ui";
<TextInput placeholder="Errorrrr Eroooorrr!" width="400px" error />
<TextInput placeholder="Disabled Input 😴" width="400px" disabled />
<TextInput placeholder="You can only read me 😈" width="400px" readonly />
```

### Clearable

To clear the input, add the `clearable` prop and the `UseState` hook.

```jsx
import React, { useState } from 'react';
import { TextInput } from 'chic-ui';

const Clearable = () => {
    const [value, setValue] = useState('');
return (
    <TextInput
    placeholder="Type and clearrr..."
    width="400px"
    value={value}
    onChange={(e) => setValue(e.currentTarget.value)}
    clearable
    />;
)}
```

### API

```
import { TextInput } from 'chic-ui';
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
    <td>Width of Text Input</td>
  </tr>
  <tr>
    <td>size</td>
    <td>'small' | 'default' | 'large'</td>
    <td>'default'</td>
    <td>Size of Text Input</td>
  </tr>
  <tr>
    <td>icon</td>
    <td>ElementType</td>
    <td></td>
    <td>Add icons to Text Input</td>
  </tr>
  <tr>
    <td>error</td>
    <td>boolean</td>
    <td>false</td>
    <td>Shows Error Text Input</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disable Text Input</td>
  </tr>
  <tr>
    <td>readonly</td>
    <td>boolean</td>
    <td>false</td>
    <td>ReadOnly Text Input</td>
  </tr>
  <tr>
    <td>clearable</td>
    <td>boolean</td>
    <td>false</td>
    <td>Clearable Text Input</td>
  </tr>
  <tr>
    <td>value</td>
    <td>string</td>
    <td></td>
    <td>Set Value for Text Input</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>ChangeEventHandler: HTMLInputElement</td>
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
