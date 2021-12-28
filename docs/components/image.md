---
sidebar_position: 8
---

# Images

Use images having different sizes, shapes and borders.

### Examples

Images can be displayed using the `src` prop.

- Note: To change the dimensions of the image, use the `width` and `height` props. By default the width and height of the image is 100%

import { Image } from 'chic-ui';

<>
<Image className='single' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNO3U161Gmfn4tpmvDt3j-5wQlY4CsKulAw&usqp=CAU' width='160px' height='130px' />
<Image className='single' src='https://wallpaperaccess.com/full/32048.jpg' width='160px' height='130px' />
</>

```jsx
import { Image } from 'chic-ui';

<Image src='cat1.png' width='160px' height='130px' />
<Image src='cat2.png' width='160px' height='130px' />
```

### Shape and Border

The shape of the images can be changed using the `rounded` and `circle` props.

Give a cute white outline to the image using the `outline` prop.

<>
<Image className='single' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNO3U161Gmfn4tpmvDt3j-5wQlY4CsKulAw&usqp=CAU' width='160px' height='130px' rounded />
<Image className='single' src='https://wallpaperaccess.com/full/235592.jpg' width='150px' height='140px' circle />
<Image className='single' src='https://wallpaperaccess.com/full/32048.jpg' width='160px' height='140px' outline />
</>

```jsx
import { Image } from 'chic-ui';

<Image src='cat1.png' width='160px' height='130px' rounded />
<Image src='cat2.png' width='160px' height='130px' circle />
<Image src='cat3.png' width='160px' height='130px' outline />
```

### Props

```
import { Image } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>src (required)</td>
    <td>string</td>
    <td></td>
    <td>Path of the image</td>
  </tr>
  <tr>
    <td>width</td>
    <td>string</td>
    <td>'100%'</td>
    <td>Width of the image</td>
  </tr>
  <tr>
    <td>height</td>
    <td>string</td>
    <td>'100%'</td>
    <td>Height of the image</td>
  </tr>
  <tr>
    <td>rounded</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets image shape as rounded</td>
  </tr>
   <tr>
    <td>circle</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets image shape as circle</td>
  </tr>
   <tr>
    <td>outline</td>
    <td>boolean</td>
    <td>false</td>
    <td>Provides white borders to the image</td>
  </tr>
</table>
