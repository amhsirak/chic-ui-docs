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
<TextInput placeholder='Type something...' size='small' />
<br />
<TextInput placeholder='Type something...' width='200px' size='large'/>
</>

```jsx
import { TextInput } from 'chic-ui';

<TextInput placeholder='Type something...' size='small' />
<TextInput placeholder='Type something...' width='200px' size='large'/>
```

### Icons

Use icons within the text input using the `icon` prop.
<>

<TextInput className='single' placeholder='Enter Full Name' icon={FaUserAlt} />
</>

```jsx
import { TextInput } from 'chic-ui';

<TextInput className='single' placeholder='Enter Full Name' icon={FaUserAlt} />
```