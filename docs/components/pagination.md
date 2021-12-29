---
sidebar_position: 10
---

# Pagination

Paginations communicate the number of elements (images, articles, commentaries, pages…) that can be loaded within a given context.

```jsx
import React from 'react';
import { Pagination } from 'chic-ui';

const SimplePagination = () => {
  return (
    <Pagination
      type="secondary"
      pages={7}
      activeBg="white"
      activeColor="black"
      activeHoverColor="black"
      whenNextPage={(page) => alert(`whenNextPage page hit, currently in page ${page}`)}
      whenPreviousPage={(page) => alert(`whenPreviousPage page hit, currently in page ${page}`)}
      whenPageChange={(page) => alert(`whenPageChange hit, currently in page ${page}`)}
    />
  );
};
```

### Add Custom Background
Use `customBg` prop to customize styling of the pagination.

```jsx
import React from 'react';
import { Pagination } from 'chic-ui';

const CustomPagination = () => {
  return (
    <Pagination
      customBg={{
          bgColor:"gray",
          hover: "black",
          color: "yellow"
      }}
      pages={4}
      activeBg="white"
      activeColor="black"
      activeHoverColor="black"
      whenNextPage={(page) => alert(`On new page`)}
      whenPreviousPage={(page) => alert(`On previous page`)}
      whenPageChange={(page) => alert(`Hit page`)}
    />
  );
};
```


### Props

```
import { Pagination } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>bgType </td>
    <td>'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'primary'</td>
    <td>Background color of the Pagination</td>
  </tr>
  <tr>
    <td>activeBg (required)</td>
    <td>string</td>
    <td></td>
    <td>Sets background color of the active page</td>
  </tr>
  <tr>
    <td>activeColor (required)</td>
    <td>string</td>
    <td></td>
    <td>Sets color of the active page</td>
  </tr>
  <tr>
    <td>activeHoverColor (required)</td>
    <td>string</td>
    <td></td>
    <td>Sets hover color of the active page</td>
  </tr>
  <tr>
    <td>customBg</td>
    <td>
    <span>&#10100;</span>
    bgColor: string,
    hover: string,
    color: string
    <span>&#10101;</span> 
    </td>
    <td></td>
    <td>Sets custom background color</td>
  </tr>
  <tr>
    <td>pages (required)</td>
    <td>number</td>
    <td></td>
    <td>Number of Pages. By default count starts from 1</td>
  </tr>
  <tr>
    <td>whenNextPage (required)</td>
    <td>(page: number) => void</td>
    <td></td>
    <td>Handles value changes for next page</td>
  </tr>
  <tr>
    <td>whenPreviousPage (required)</td>
    <td>(page: number) => void</td>
    <td></td>
    <td>Handles value changes for previous page</td>
  </tr>
  <tr>
    <td>whenPageChange (required)</td>
    <td>(page: number) => void</td>
    <td></td>
    <td>Handles value changes for page changes</td>
  </tr>
   <tr>
    <td>startCountInZero</td>
    <td>boolean</td>
    <td></td>
    <td>Starts count of pages from 0</td>
  </tr>
</table>
