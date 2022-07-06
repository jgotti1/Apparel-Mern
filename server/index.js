import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import apparelRoutes from "./routes/apparel.js";

const app = express();
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

//Route Paths
app.use("/apparel", apparelRoutes);

const CONNECTION_URL = "mongodb+srv://jgotti1:EGhlKlFNuigyQZdN@apparelorder.h2euw.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  // .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Mongo connection is established and running on port: ${PORT}`)))
  .catch((err) => console.log(err.message));
