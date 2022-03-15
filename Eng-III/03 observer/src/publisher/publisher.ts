import { Participant } from 'src/subscriber/subscriber';

export interface Message {
  publisherName: string;
  content: string;
}

export class Publisher {
  subscribers: Participant[] = [];
  messages: Message[] = [];

  subscribe(v: Participant) {
    this.subscribers.push(v);
  }

  unsubscribre(id: number) {
    const subscriber = this.subscribers.findIndex((v) => v.id === id);

    this.subscribers.splice(subscriber, 1);
  }

  newMessage(message: Message) {
    this.messages.push(message);

    this.notify(message);
  }

  notify(message: Message) {
    this.subscribers.forEach((sub) => sub.update(message));
  }
}
