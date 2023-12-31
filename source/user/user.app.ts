import "dotenv/config";
import express from "express";
import cors from "express";
import userRoute from "./intrastructure/route/user.route";
import dbInit from "./intrastructure/db/mongo";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(userRoute);
dbInit().then();

app.listen(port, () => console.log('Server Running on port', port));