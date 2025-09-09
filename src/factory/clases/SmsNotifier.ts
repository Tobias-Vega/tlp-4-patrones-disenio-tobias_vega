export class SmsNotifier implements INotifier {

  send(to: string, message: string): void {
    console.log(`[SMS] A: ${to} - ${message}`);
  }
}