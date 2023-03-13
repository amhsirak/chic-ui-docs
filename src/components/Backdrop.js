import React from 'react';
import { Button, Backdrop } from 'chic-ui';

export function BasicBackdrop() {
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

export function CustomBackdrop () {
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
      <Backdrop visible={open} onClick={handleClose} color="red">
        <p>Hello world</p>
      </Backdrop>
    </>
  );
};
