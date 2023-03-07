# Drawer

### Example

```jsx
import { Drawer } from 'chic-ui';

export const SampleDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(!open);
  return (
    <>
      <button onClick={handleClose}>Open Drawer</button>
      <Drawer
        open={open}
        size="default"
        closable={true}
        placement="bottom"
        header="Header Content"
        footer="Footer content"
        onClose={handleClose}
      >
        <div>Some contents...</div>
        <div> Some contents...</div>
        <div> Some contents...</div>
      </Drawer>
    </>
  );
};
```

### API

```
import { Drawer } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>size</td>
    <td>'default' | 'large'</td>
    <td>'default'</td>
    <td>Size of the drawer</td>
  </tr>
  <tr>
    <td>closable</td>
    <td>boolean</td>
    <td>true</td>
    <td>Boolean to determine if drawer can be closed</td>
  </tr>
  <tr>
    <td>placement</td>
    <td>'top' | 'right' | 'bottom' | 'left'</td>
    <td></td>
    <td>Placement of the tooltip</td>
  </tr>
 <tr>
    <td>onClose</td>
    <td>function</td>
    <td></td>
    <td>Specify a function that will be called when the Drawer is closed</td>
  </tr>
   <tr>
    <td>placement</td>
    <td>'left' | 'right' | 'top' | 'bottom'</td>
    <td>'right'</td>
    <td>Placement of the drawer</td>
  </tr>
  <tr>
    <td>open</td>
    <td>boolean</td>
    <td>false</td>
    <td>Boolean to determine if drawer is open</td>
  </tr>
  <tr>
    <td>children</td>
    <td>ReactNode</td>
    <td></td>
    <td>Contents of the drawer</td>
  </tr>
  <tr>
    <td>header</td>
    <td>ReactNode</td>
    <td></td>
    <td>Header of the drawer</td>
  </tr>
  <tr>
    <td>footer</td>
    <td>ReactNode</td>
    <td></td>
    <td>Footer of the drawer</td>
  </tr>
  <tr>
    <td>height</td>
    <td>number</td>
    <td></td>
    <td>Height for top and bottom placement. Will override size property</td>
  </tr>
  <tr>
    <td>width</td>
    <td>number</td>
    <td></td>
    <td>Width for top and bottom placement. Will override size property</td>
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
