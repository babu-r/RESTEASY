import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const restaurantMenu = [
   {
     "id": 1,
     "name": "Burger",
     "description": "Juicy beef burger with cheese and veggies.",
     "price": 10.99,
     "imageUrl": "burger.jpg"
   },
   {
     "id": 2,
     "name": "Pizza",
     "description": "Delicious pizza with various toppings.",
     "price": 12.99,
     "imageUrl": "pizza.jpg"
   }
]
const PORT = 3001;
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to RESTEASY..");
});

app.get("/api/menu", (req, res) => {
  res.json(restaurantMenu);
  console.log(restaurantMenu, "Test")
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Conncted to DB.");
  })
  .catch((error) => {
    console.log("Error while DB connection:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
