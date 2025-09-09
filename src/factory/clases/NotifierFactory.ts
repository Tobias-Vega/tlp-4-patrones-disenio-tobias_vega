import { EmailNotifier } from "./EmailNotifier";
import { SmsNotifier } from "./SmsNotifier";
import { WhatsappNotifier } from "./WhatsappNotifier";

export class NotifierFactory {
  create(channel: Channel): INotifier {
    if (channel === 'email') {
      return new EmailNotifier()
    } else if (channel === 'sms') {
      return new SmsNotifier();
    } else if (channel === 'whatsapp') {
      return new WhatsappNotifier();
    }

    throw new Error("Canal no reconocido");
  }
}