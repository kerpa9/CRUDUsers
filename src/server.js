import app from "./app.js";
import { envs } from "./config/enviroments/enviroment.js";
import { authenticate, syncUP } from "./config/database/database.js";

const PORT = process.env.PORT || 8080;

async function main() {
  try {
    await authenticate();
    await syncUP();
    console.log(`👉 Server running on port ${envs.PORT}`);
    console.log(`👉 Link http://localhost:${envs.PORT}`);
  } catch (err) {
    console.log(err);
  }
}

main();

app.listen(envs.PORT, () => {
  console.log(`Server on port localhost: ${envs.PORT}`);
});
