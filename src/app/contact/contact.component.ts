import { Component } from '@angular/core';
import {
  MessageService,
  MessageServiceConsole,
  MessageServiceFile,
} from '../service/useClass/message.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [MessageService],
  // providers: [{ provide: MessageService, useClass: MessageServiceFile }],
})
export class ContactComponent {
  message: string;

  constructor(private messageService: MessageService) {
    this.message = this.messageService.getMessage();
  }
}
