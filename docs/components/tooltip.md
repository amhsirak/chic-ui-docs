# Tooltip

Tooltip can display information about an element when hovered over a screen element or component

## Example

```jsx
import React from 'react';
import { Tooltip } from 'chic-ui';

<Tooltip placement="top" type="secondary" content="Tooltip" />
```

### Placement

Available placements are `top`, `bottom`, `left` and `right`

```jsx
import React from 'react';
import { Tooltip } from 'chic-ui';

<>
<Tooltip placement="top" type="primary" content="Top Tooltip" />
<Tooltip placement="bottom" type="primary" content="Bottom Tooltip" />
<Tooltip placement="right" type="primary" content="Right Tooltip" />
<Tooltip placement="left" type="primary" content="Left Tooltip" />
</>
```

### Types 

Use any of the available tooltips by changing the `type` prop.

```jsx
<Tooltip placement="top" type="primary" content="Tooltip" />
<Tooltip placement="top" type="secondary" content="Tooltip" />
<Tooltip placement="top" type="warning" content="Tooltip" />
<Tooltip placement="top" type="success" content="Tooltip" />
<Tooltip placement="top" type="danger" content="Tooltip" />
<Tooltip placement="top" type="light" content="Tooltip" />
<Tooltip placement="top" type="info" content="Tooltip" />
```
