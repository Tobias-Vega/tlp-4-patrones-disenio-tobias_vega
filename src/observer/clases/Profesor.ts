import { IPublisher } from "../interfaces/IPublisher";
import { ISubscriber } from "../interfaces/ISuscriber";

export class Profesor implements IPublisher {

  private alumnos: ISubscriber[] = [];
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  subscribe(observador: ISubscriber): void {
    this.alumnos.push(observador);
  }

  unsubscribe(observador: ISubscriber): void {
    this.alumnos = this.alumnos.filter(obs => obs !== observador);
  }

  publish(trabajo: string, materia: string, fechaEntrega: string): void {
    console.log(`[Profesor] ${this.nombre} Publicó: ${trabajo}: ${materia} - entrega ${fechaEntrega}]`);
    this.alumnos.forEach(obs => obs.update(trabajo, materia, fechaEntrega));
  }
}