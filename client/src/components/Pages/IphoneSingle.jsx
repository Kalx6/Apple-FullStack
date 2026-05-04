import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function IphoneSingle() {
  const [iphones, setIphones] = useState([]);

  const { productID } = useParams();
  console.log(productID);

  useEffect(() => {
    const fetchIphones = async () => {
      const response = await fetch(
        `http://localhost:5000/iphones/${productID}`,
      );
      const data = await response.json();
      setIphones(data.products);
    };

    fetchIphones();
  }, []);

  // console.log(iphones);

  let order1 = 2;
  let order2 = 1;

  return (
    <>
      {iphones.map((iphone, index) => (
        <div className="cardCont" key={iphone.product_id}>
          <div className="headerCont">
            <h1>{iphone.product_name}</h1>
            <h2>{iphone.product_brief_description}</h2>
          </div>

          <Card className="card border-0">
            <Row className="g-0">
              {/* Image */}
              <Col md={4} className={`order-md-${order1}`}>
                <div className="imageCont">
                  <Card.Img
                    src={iphone.product_url}
                    className="img-fluid product-img"
                  />
                </div>
              </Col>

              {/* Text */}
              <Col md={8} className="order-md-1">
                <Card.Body>
                  <div className="singleCardDesc">
                    <Card.Text>Price: ${iphone.starting_price}</Card.Text>
                    <Card.Text>Price: ${iphone.price_range}</Card.Text>{" "}
                    <Card.Text>{iphone.product_description}</Card.Text>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      ))}
    </>
  );
}

export default IphoneSingle;
