import React from 'react';
import {Layout} from "../../components/Layout";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import {Input} from "../../components/UI/Input";

export const Signin = (props) => {
  return(
    <Layout>
      <Container>
        <Row style={{marginTop: "50px"}}>
          <Col md={{span: 6, offset: 3}}>
            <Form>
              <Input label="Email" placeholder="Email" value="" type="email" onChange={() => {}}/>
              <Input label="Password" placeholder="Password" value="" type="text" onChange={() => {}}/>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}