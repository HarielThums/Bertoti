import { Publisher, Message } from 'src/publisher/publisher';

interface ParticipantInterface {
  id: number;
  name: string;
  chatMessages: Message[];
}

export class Participant implements ParticipantInterface {
  id: number;
  name: string;
  chatMessages: Message[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  update(message: Message) {
    this.chatMessages.push(message);

    this.displayMessages();
  }

  displayMessages() {
    console.log(`${this.name} chat: messages:`, this.chatMessages);
  }
}
