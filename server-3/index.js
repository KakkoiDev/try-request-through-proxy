import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";

const __dirname = import.meta.dirname;

const app = express();
const port = 5002;
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("ok"));

app.get("/hello", (req, res) => res.send("world"));

app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "file.png");
  res.download(filePath);
});

app.post("/", (req, res) => {
  const data = req.body;
  data.status = "done";
  res.json(data);
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send(`File: ${req.file.originalname}, uploaded successfully!`);
});

app.listen(port, () => console.log(`Server 3 running on port ${port}...`));
