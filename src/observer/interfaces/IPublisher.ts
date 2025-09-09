import { ISubscriber } from "./ISuscriber";

export interface IPublisher {
  subscribe(observador: ISubscriber): void;
  unsubscribe(observador: ISubscriber): void;
  publish(trabajo: string, materia: string, fechaEntrega: string): void;
}