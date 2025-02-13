import express from "express";
import * as path from "path";
import indexRouter from "./routes/indexRouter.mjs";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
