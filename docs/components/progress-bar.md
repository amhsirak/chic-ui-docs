---
sidebar_position: 11
---

# Progress Bar

Progress bars display an indicator showing the completion/progress of a task.


```jsx
import React from 'react';
import { ProgressBar } from 'chic-ui';

<>
<ProgressBar progress={80} />
<ProgressBar progress={80} type="danger" />
</>
```

You can hide the progress using `showProgress` prop.
```jsx
import React from 'react';
import { ProgressBar } from 'chic-ui';

<>
<ProgressBar progress={80} type="success" showProgress='false' />
</>
```

### Animated ProgressBar
```jsx
import React from 'react';
import { ProgressBar } from 'chic-ui';

<>
<ProgressBar progress={80} animated />
<ProgressBar progress={80} type="warning" animated/>
</>
```



