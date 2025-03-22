import express from "express";
import cors from "cors";
import config from "./config.js";
import emailJsRoutes from "./routes/emailJsRoutes.js";

const app = express();

const { PORT, whiteListSites } = config;

app.use(
  cors({
    origin: whiteListSites,
    credentials: true,
  })
);
app.use(express.json());

app.use(emailJsRoutes);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "hello",
  });
});

app.listen(PORT, () => {
  console.log(`app is started on PORT ${PORT}`);
});
