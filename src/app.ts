import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("server is running");
});

export default app;
