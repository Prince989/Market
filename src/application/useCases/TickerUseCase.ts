import WebSocketManager from '@/data/api/WebSocketManager';
import { TickerData } from '@/domain/model/Ticker';

// UseCase class to subscribe and unsubscribe from the market
class TickerUseCase {
  private webSocketManager: WebSocketManager;

  constructor() {
    this.webSocketManager = new WebSocketManager();
  }

  // Subscribe to the market and start receiving data
  public subscribeToTickerStream(callback: (data: TickerData[]) => void) {
    this.webSocketManager.subscribeToTickerStream(callback);
  }

  // Unsubscribe from the market and stop receiving data
  public unsubscribeFromTickerStream() {
    this.webSocketManager.unsubscribeFromTickerStream();
  }
}

export default TickerUseCase;