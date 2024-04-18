import express from "express";
import path from "path";

const __dirname = import.meta.dirname;

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Server 1 running on port ${port}...`));
