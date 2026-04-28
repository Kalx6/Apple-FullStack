import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Iphone() {
  return (
    <>
      <div className="cardCont">
        <Card style={{ width: "500px" }}>
          <Row className="g-0">
            {/* Image */}
            <Col md={4} className="order-md-1">
              <Card.Img src="" className="img-fluid" />
            </Col>

            {/* Text */}
            <Col md={8} className="order-md-2">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text here.</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Iphone;
