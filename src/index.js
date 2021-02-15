import express from "express";
import handlebars from "express-handlebars";
import router from "./routes/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static(path.resolve(__dirname, "public")));
const { PORT, HOST } = process.env;

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(router);

app.listen(parseInt(PORT, 10), HOST, () =>
  console.log(`App is running at ${HOST}:${PORT}`)
);
