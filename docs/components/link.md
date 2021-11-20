---
sidebar_position: 8
---

# Links

Use `href` prop to specify the URL

import { Link } from 'chic-ui';

<Link href='https://github.com/karishmashuklaa/chic-ui'>
Link to Chic-UI Repository
</Link>

```jsx
import { Link } from 'chic-ui';

<Link href='https://github.com/karishmashuklaa/chic-ui'>
Link to Chic-UI Repository
</Link>
```

### Disabled Links
Use the `disabled` prop to disable links.

<Link href='https://github.com/karishmashuklaa/chic-ui' disabled>
Disabled Link to Chic-UI Repository
</Link>

```jsx
import { Link } from 'chic-ui';

<Link href='https://github.com/karishmashuklaa/chic-ui' disabled>
Disabled Link to Chic-UI Repository
</Link>
```

### Props

```
import { Link } from 'chic-ui';
```

<table>
  <tr>
     <td>Name</td>
     <td>Type</td>
     <td>Default</td>
     <td>Description</td>
  </tr>
  <tr>
    <td>href (required)</td>
    <td>string</td>
    <td></td>
    <td>URL of the Link</td>
  </tr>
  <tr>
    <td>as</td>
    <td>ElementType</td>
    <td></td>
    <td>If `as` is added, link becomes a custom html node specified in `as`</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disable a Link</td>
  </tr>
  <tr>
    <td>children (required)</td>
    <td>ReactNode</td>
    <td></td>
    <td>Children for the Link</td>
  </tr>
</table>
