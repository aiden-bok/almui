import { Button, Form, TextField } from 'almui'
import React from 'react'

/**
 * React component that provides a `<Form>` demo page.
 *
 * @component
 * @returns {React.Component} `<Form>` demo page.
 */
const FormDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;Form&gt; demo page</h1>
      <Form>
        <TextField label="이메일" />
        <TextField label="패스워드" />
        <Button type="submit">로그인</Button>
      </Form>
    </React.Fragment>
  )
}

export { FormDemoPage }
