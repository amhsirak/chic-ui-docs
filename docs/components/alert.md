---
sidebar_position: 20
---

# Alert

Alert component can be used to display alerts, notifications and other feedback messages to the user

import { Alert } from 'chic-ui';

<>
<Alert title="You have earned a million dollars!" message="No. Just kidding." />
</>

## Basic Usage

```jsx
import React from 'react';
import { Alert } from 'chic-ui';

<>
  <Alert
    title="You have earned a million dollars!"
    message="No. Just kidding."
  />
</>;
```

### Types of Alert

Use the `type` prop to specify the type of alert. Default type is `primary`

<>
<Alert title="Title" message="Message" type="primary" />
<Alert title="Title" message="Message" type="secondary" />
<Alert title="Title" message="Message" type="warning" />
<Alert title="Title" message="Message" type="success" />
<Alert title="Title" message="Message" type="danger" />
<Alert title="Title" message="Message" type="info" />
<Alert title="Title" message="Message" type="light" />
</>

```jsx
import React from 'react';
import { Alert } from 'chic-ui';

<>
<Alert title="Title" message="Message" type="primary" />
<Alert title="Title" message="Message" type="secondary" />
<Alert title="Title" message="Message" type="warning" />
<Alert title="Title" message="Message" type="success" />
<Alert title="Title" message="Message" type="danger" />
<Alert title="Title" message="Message" type="info" />
<Alert title="Title" message="Message" type="light" />
<>
</>;
```

### Dismiss Alerts

An alert can be dismissed by setting `dismissible` prop to `true`.
The `onClose` prop specifies a function that will be called when the alert is dismissed

import { DismissAlerts } from '@site/src/components/Alert';

<DismissAlerts />


```jsx
import { Alert } from 'chic-ui';
export function DismissAlerts(){
    const [show, setShow] = React.useState(true);
  
    const onClick = useCallback(() => {
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

```

### API

```
import { Alert } from 'chic-ui';
```

<!-- TODO : show prop -->

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'primary'</td>
    <td>Type of alert</td>
  </tr>
  <tr>
    <td>title (required)</td>
    <td>string</td>
    <td></td>
    <td>Title of the alert</td>
  </tr>
    <tr>
    <td>message (required)</td>
    <td>string</td>
    <td></td>
    <td>Message of the alert</td>
  </tr>
  <tr>
    <td>dismissible</td>
    <td>boolean</td>
    <td>false</td>
    <td>Boolean flag to allow dismissing the alert</td>
  </tr>
   <tr>
    <td>onClose</td>
    <td>function</td>
    <td></td>
    <td>Specify a function that will be called when the message is closed</td>
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
