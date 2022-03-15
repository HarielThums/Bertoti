import { Participant } from './subscriber/subscriber';
import { Publisher } from './publisher/publisher';

class Main {
  async execute() {
    const participant1 = new Participant(1, 'foo');
    const participant2 = new Participant(2, 'bar');

    const chat = new Publisher();

    chat.subscribe(participant1);
    chat.subscribe(participant2);

    chat.newMessage({ content: 'Hello bar', publisherName: participant1.name });
    chat.newMessage({ content: 'Hello foo', publisherName: participant2.name });
  }
}

new Main().execute();
