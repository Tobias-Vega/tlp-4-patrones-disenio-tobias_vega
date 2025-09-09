import { ISubscriber } from "../interfaces/ISuscriber";

export class Student implements ISubscriber {

  constructor(private nombre: string) {}

  update(trabajo: string, tema: string, fechaEntrega: string): void {
    console.log(`[Alumno ${this.nombre}] Nueva notificación: ${trabajo}: ${tema} - entrega ${fechaEntrega}`);
  }
}