import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import {Layout} from "../../components/Layout";
import "./style.css";

export const Home = (props) => {
  return(
    <Layout>
      <Container fluid={true}>
        <Row>
          <Col md={2} className="sidebar">Side bar</Col>
          <Col md={10} style={{marginLeft: "auto"}}>Container</Col>
        </Row>
      </Container>
      
      {/* <div style={{margin: "5rem", background: "#FFF"}} className='jumbotron text-center'>
        <h1>Welcome to Admin Dashboard</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquid voluptate numquam expedita vero, ipsam maiores distinctio in, repudiandae quam eligendi et reprehenderit, temporibus voluptates magnam ab? Perspiciatis quaerat consequuntur consectetur, cumque asperiores deleniti optio? Cumque nisi itaque aut fugiat!</p>

      </div> */}

    </Layout>
  );

}