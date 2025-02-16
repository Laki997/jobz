import express, { Express, Request, Response } from "express";
import "dotenv/config";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Jobz");
});

app.listen(port, () => {
  console.log(`Jobz listening on port ${port}`);
});
