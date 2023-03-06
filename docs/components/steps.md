# Steps

Steps is a type of navigation bar that guides users through numbered steps

### Basic Usage

```jsx
<Steps active={1} direction="horizontal" divider="" type="primary">
  <Step subTitle="Step one details" title="Step One" />
  <Step subTitle="Step two details" title="Step Two" />
  <Step subTitle="Step three details" title="Step Three" />
  <Step subTitle="Step four details" title="Step Four" />
</Steps>
```

### Vertical

```jsx
<Steps active={1} direction="vertical" divider="" type="primary">
  <Step subTitle="Step one details" title="Step One" />
  <Step subTitle="Step two details" title="Step Two" />
  <Step subTitle="Step three details" title="Step Three" />
  <Step subTitle="Step four details" title="Step Four" />
</Steps>
```

### Responsive

```jsx
<Steps active={1} direction="horizontal" divider="" responsive type="primary">
  <Step subTitle="Step one details" title="Step One" />
  <Step subTitle="Step two details" title="Step Two" />
  <Step subTitle="Step three details" title="Step Three" />
  <Step subTitle="Step four details" title="Step Four" />
</Steps>
```

### Interactive

```jsx
<>
  <h3
    style={{
      marginBottom: '1rem',
      textAlign: 'center',
    }}
  >
    Click on icon to change step
  </h3>
  <Steps
    active={3}
    direction="horizontal"
    divider=""
    onChange={() => {}}
    type="primary"
  >
    <Step subTitle="Step one details" title="Step One" />
    <Step subTitle="Step two details" title="Step Two" />
    <Step subTitle="Step three details" title="Step Three" />
    <Step subTitle="Step four details" title="Step Four" />
  </Steps>
</>
```

### Custom Icon

```jsx
<Steps active={1} direction="horizontal" divider="" type="primary">
  <Step
    icon={
      <SvgCross
        style={{
          background: 'darkseagreen',
          height: '32px',
          padding: '0.5rem',
          width: '32px',
        }}
      />
    }
    subTitle="Step one details"
    title="Step One"
  />
  <Step subTitle="Step two details" title="Step Two" />
  <Step subTitle="Step three details" title="Step Three" />
  <Step subTitle="Step four details" title="Step Four" />
</Steps>
```

### API

```
import { Steps } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>active</td>
    <td>number</td>
    <td>0</td>
    <td>Count of step start from 0</td>
  </tr>
  <tr>
    <td>direction</td>
    <td>'horizontal' | 'vertical'</td>
    <td>horizontal</td>
    <td>Steps direction</td>
  </tr>
  <tr>
    <td>responsive</td>
    <td>boolean</td>
    <td>true</td>
    <td>Change to vertical direction when screen width smaller than 532px</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>(active: number) => void</td>
    <td></td>
    <td>Detects when the value of step changes</td>
  </tr>
   <tr>
    <td>type</td>
    <td>'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'primary'</td>
    <td>Type of Steps</td>
  </tr>
  <tr>
    <td>divider</td>
    <td>ReactNode</td>
    <td></td>
    <td>Custom Divider</td>
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
