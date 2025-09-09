import { ConexionDB } from "./clases/ConexionDB"

export const runSingleton = () => {
  const conexionDB = ConexionDB.getInstance();

  conexionDB.connect();
  conexionDB.connect();
  conexionDB.disconnect();
  conexionDB.disconnect();
}