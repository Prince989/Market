import WebSocketClient from '../../infrastructure/WebSocketClient';

class WebSocketManager {
  private socketClient: WebSocketClient;

  constructor() {
    this.socketClient = new WebSocketClient(process.env.NEXT_PUBLIC_WEBSOCKET_URL || "");
  }

  // Subscribe to the market and start listening for data
  public subscribeToTickerStream(callback: (data: any) => void) {
    const request = { method: 'SUBSCRIBE', params: ['!ticker@arr'] };
    this.socketClient.subscribe(request, callback);
  }

  // Unsubscribe from the market and stop listening for data
  public unsubscribeFromTickerStream() {
    const request = { method: 'UNSUBSCRIBE', params: ['!ticker@arr'] };
    this.socketClient.unsubscribe(request);
  }
}

export default WebSocketManager;