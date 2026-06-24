export class ChatService {
  sendMessage(senderId: string, receiverId: string, message: string) {
    return {
      id: Date.now().toString(),
      senderId,
      receiverId,
      message,
      timestamp: new Date(),
      status: "sent",
    };
  }

  getMessages(conversationId: string) {
    return [];
  }
}
