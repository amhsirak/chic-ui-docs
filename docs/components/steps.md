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
