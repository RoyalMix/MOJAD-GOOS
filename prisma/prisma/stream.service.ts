export class StreamService {
  startStream(userId: string, title: string) {
    return {
      streamId: Date.now().toString(),
      host: userId,
      title,
      viewers: 0,
      live: true,
    };
  }

  endStream(streamId: string) {
    return {
      streamId,
      live: false,
    };
  }
}
