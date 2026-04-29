import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [iphones, setIphones] = useState([]);

  useEffect(() => {
    const fetchIphones = async () => {
      const response = await fetch("http://localhost:5000/iphones");
      const data = await response.json();
      setIphones(data.products);
    };

    fetchIphones();
  }, []);

  console.log(iphones);

  let order1 = 1;
  let order2 = 2;

  return (
    <>
      <div className="cardCont">
        <div className="headerCont">
          <h1>iPhones</h1>
          <p>The best for the brightest</p>
        </div>
        {iphones.map(
          (iphone, index) => (
            index % 2 === 0
              ? ((order1 = 1), (order2 = 2))
              : ((order1 = 2), (order2 = 1)),
            (
              <Card className="card border-0" key={iphone.product_id}>
                <Row className="g-0">
                  {/* Image */}
                  <Col md={4} className={`order-md-${order1} imageCont`}>
                    <Card.Img src={iphone.product_url} className="img-fluid" />
                  </Col>

                  {/* Text */}
                  <Col md={8} className="order-md-1">
                    <Card.Body className="cardBody">
                      <Card.Title>
                        <h2 className="fw-bold">{iphone.product_name}</h2>
                      </Card.Title>
                      <div className="cardDesc">
                        <Card.Text>
                          {iphone.product_brief_description}
                        </Card.Text>
                        <Card.Text>Price: ${iphone.price_range}</Card.Text>
                      </div>

                      <Link to={`/iphone/${iphone.product_id}`}>
                        <Button className="btn" variant="primary">
                          Learn More
                        </Button>
                      </Link>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            )
          ),
        )}
      </div>
    </>
  );
}

export default Iphone;
