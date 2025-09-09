export interface ISubscriber {
  update(trabajo :string, tema: string, fechaEntrega: string): void;
}