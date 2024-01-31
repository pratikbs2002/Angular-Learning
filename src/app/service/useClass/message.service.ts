import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  getMessage(): string {
    return 'Hello Message!';
  }
}

@Injectable()
export class MessageServiceConsole extends MessageService {
  override getMessage(): string {
    return 'Console: ' + super.getMessage();
  }
}

@Injectable()
export class MessageServiceFile extends MessageService {
  override getMessage(): string {
    return 'File: ' + super.getMessage();
  }
}
