export class WhatsappNotifier implements INotifier {

  send(to: string, message: string): void {
    console.log(`[Whatsapp] A: ${to} - ${message}`);
  }
}