import React from 'react';
import { Alert } from 'chic-ui';

export function DismissAlerts(){
    const [show, setShow] = React.useState(true);
  
    const onClick = React.useCallback(() => {
      setShow((prev) => !prev);
    }, []);
  
    return (
      <Alert
        title={'Title'}
        message={'message'}
        dismissible
        type="primary"
        show={show}
        onClose={onClick}
      />
    );
  };