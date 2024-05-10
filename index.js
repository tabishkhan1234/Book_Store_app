import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./router/book.route.js";
import cors from "cors";
import userRoute from "./router/user.route.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MongoDbURL = process.env.MongoDbURL;

///connect to mongodb

try {
  mongoose.connect(MongoDbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongodb connect");
} catch (error) {
  console.log("error,error");
}

app.use("/user", userRoute);

app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`);
});
