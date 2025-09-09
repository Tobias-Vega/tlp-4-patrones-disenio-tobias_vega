import { IConexionDB } from "../interfaces/IConexionDB";

export class ConexionDB implements IConexionDB {

  private static instance: ConexionDB;
  private host: string = 'localhost';
  private port: number = 3306;
  private user: string = 'root';
  private isConected: boolean = false;

  public static getInstance(): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB();
    }
    return ConexionDB.instance;
  }

  connect(): void {
    if (this.isConected) {
      console.log("DB ya está conectada");
      return;
    }

    console.log(`Conectado a DB -> inventario_${this.user}@${this.host}:${this.port}`)
    this.isConected = true;
  }

  disconnect(): void {
    if (!this.isConected) {
      console.log("DB ya está desconectada");
      return;
    }

    this.isConected = false;
    console.log(`Desconectado de la DB`);
  }
}