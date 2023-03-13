# Backdrop

### Basic Usage

import { BasicBackdrop } from '@site/src/components/Backdrop';

<BasicBackdrop />

```jsx
import { Button, Backdrop } from 'chic-ui';

const BasicBackdrop = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleToggle}>Toggle</Button>
      <Backdrop visible={open} onClick={handleClose}>
        <p>Hello world</p>
      </Backdrop>
    </>
  );
};
```

### Custom Colored Backdrop

```jsx
<Backdrop color="red" />
```

### Invisible

```jsx
<Backdrop color="red" visible={false} />
```

### API

```
import { Backdrop } from 'chic-ui';
```

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>visible</td>
    <td>boolean</td>
    <td>true</td>
    <td>If set to `true`, the Backdrop component will not be hidden</td>
  </tr>
  <tr>
    <td>color</td>
    <td>string</td>
    <td></td>
    <td>Color of backdrop</td>
  </tr>
  <tr>
    <td>onClick</td>
    <td>function</td>
    <td></td>
    <td>Specify a function that will be called when the Backdrop is clicked</td>
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
  <tr>
    <td>children</td>
    <td>ReactNode</td>
    <td></td>
    <td>Contents of the backdrop</td>
  </tr>
</table>
