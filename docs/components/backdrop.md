# Backdrop

### Basic Usage

```jsx
import { Button, Backdrop } from 'chic-ui';

const BasicBackdrop = () => {
    const [open, setOpen] = React.useState(false)
    const handleClose = () => {
    setOpen(false);
    }
    const handleToggle = () => {
    setOpen(!open);
    }

    return (
    <>
    <Button onClick={handleToggle}>Toggle</Button>
    <Backdrop visible={open} onClick={handleClose}>
        <p>Hello world</p>
    </Backdrop>
    </>
    )
}
```

### Custom Colored Backdrop

```jsx
<Backdrop color="red" />
```

### Invisible

```jsx
<Backdrop color="red" visible={false} />
```


