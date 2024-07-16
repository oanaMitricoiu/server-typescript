import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["utfjhdk"] }));
app.use(router);

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
