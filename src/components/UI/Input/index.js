import React from 'react';
import {Form} from "react-bootstrap";

export const Input = (props) => {
  return(
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
      <Form.Text className="text-muted">
        {props.errorMessage}
      </Form.Text>
    </Form.Group>
  );

}