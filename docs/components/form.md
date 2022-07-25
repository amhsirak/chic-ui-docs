---
sidebar_position: 18
---

# Form

Basic Form

import { Form } from 'chic-ui';

<>

<Form onSubmit={(values) => {console.log('Form Data:::', values);}}>
<Form.Input
  placeholder="Enter your full name"
  name="fullname"
  label="Full name"
  required
/>
<Form.Input
  placeholder="Enter your email"
  name="email"
  label="Email"
  required
/>

<Form.Input
  type="password"
  placeholder="Enter your password"
  name="password"
  label="Password"
  required
/>

<Form.RadioGroup label="Gender" name="gender">
  <Form.Radio value="male" label="Male" />
  <Form.Radio value="female" label="Female" />
</Form.RadioGroup>

<Form.Input
  label="Description"
  name="bio"
  placeholder="Enter your bio"
  rows={5}
/>

<Form.CheckboxGroup label="Internet" required>
  <Form.Checkbox label="3G" value="3g" name="internet" id="3g" />
  <Form.Checkbox label="4G" value="4g" name="internet" id="4g" />
</Form.CheckboxGroup>
<Form.SubmitButton>Submit</Form.SubmitButton>
</Form>
</>

```jsx
import { Form } from 'chic-ui';

const SampleForm = () => {
  const onSubmit = (values: any) => {
    console.log('Submitted data: ', values);
  };

  return (
    <div style={{ width: '300px' }}>
      <Form onSubmit={onSubmit}>
        <Form.Input
          placeholder="Enter your full name"
          name="fullname"
          label="Full name"
          required
        />

        <Form.Input
          placeholder="Enter your email"
          name="email"
          label="Email"
          required
          validate={[isEmail('Invalid email.')]}
        />

        <Form.Input
          type="password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          required
          validate={[
            isStrongPassword(
              'Password must be at least 8 characters, 1 lower case characters, 1 upper case characters, 1 numbers and 1 symbols'
            ),
          ]}
        />

        <Form.RadioGroup label="Gender" name="gender">
          <Form.Radio value="male" label="Male" />
          <Form.Radio value="female" label="Female" />
        </Form.RadioGroup>

        <Form.Input
          label="Description"
          name="bio"
          placeholder="Enter your bio"
          rows={5}
        />

        <Form.CheckboxGroup label="Internet" required>
          <Form.Checkbox label="3G" value="3g" name="internet" id="3g" />
          <Form.Checkbox label="4G" value="4g" name="internet" id="4g" />
        </Form.CheckboxGroup>

        <Form.SubmitButton>Submit</Form.SubmitButton>
      </Form>
    </div>
  );
};
```
### API

```
import { Form } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>children (required)</td>
    <td>React Node</td>
    <td></td>
    <td>Children of form</td>
  </tr>
  <tr>
    <td>onSubmit</td>
    <td>Config<FormValues, Partial<FormValues>>['onSubmit']</td>
    <td></td>
    <td>Function to call on form submit</td>
  </tr>
</table>

