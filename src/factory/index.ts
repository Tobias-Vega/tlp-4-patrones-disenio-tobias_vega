import { NotifierFactory } from "./clases/NotifierFactory";

export const runFactory = () => {
  console.log("FACTORY");

  const notifierFactory: NotifierFactory = new NotifierFactory();

  const email: INotifier = notifierFactory.create("email");
  const sms: INotifier = notifierFactory.create("sms");
  const whatsapp: INotifier = notifierFactory.create("whatsapp");

  email.send("ana@gmail.com", "Recordatorio de clase a las 10:00");
  sms.send("+5403700000000", "Tu nota de TP! ya está disponible");
  whatsapp.send("+543700000000", "Se reprogramó la clase para mañana 9:00");
}