import express from "express";
import { ENV_CONFIG } from "./config";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const PORT = ENV_CONFIG.PORT;

app.listen(PORT, () => {
  console.log(`Servidor mock da catraca online na porta: ${PORT}`);
});
