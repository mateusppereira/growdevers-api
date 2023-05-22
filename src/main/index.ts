import { DatabaseConnection } from "./database";
import { runServer } from "./server";

const databaseConn = new DatabaseConnection();

databaseConn.connect()
  .then(() => runServer())
  .catch((error) => {
    console.log('Erro ao inicializar o servidor', error);
  });
