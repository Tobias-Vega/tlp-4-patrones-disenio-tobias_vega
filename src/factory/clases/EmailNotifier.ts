export class EmailNotifier implements INotifier {

  send(to: string, message: string): void {
    console.log(`[Email] A: ${to} - ${message}`);
  }

}