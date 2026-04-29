import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/iphones", async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECt * FROM Products 
       INNER JOIN  ProductDescription ON Products.product_id = ProductDescription.product_id 
       INNER JOIN  ProductPrice ON ProductPrice.product_id = ProductDescription.product_id `,
    );

    res.json({ products: rows });
    // console.log(fields);
  } catch (error) {
    console.error("fetching error ", error);
  }
});

app.get("/iphones/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const [rows] = await db.query(
      `SELECt * FROM Products 
       INNER JOIN  ProductDescription ON Products.product_id = ProductDescription.product_id 
       INNER JOIN  ProductPrice ON ProductPrice.product_id = ProductDescription.product_id
        WHERE Products.product_id = ${productId}`,
    );

    res.json({ products: rows });
    // console.log(fields);
  } catch (error) {
    console.error("fetching error ", error);
  }
});

app.listen(5000, () => {
  console.log("listing from port 5000");
});
