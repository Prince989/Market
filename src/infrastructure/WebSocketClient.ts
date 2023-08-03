import { TickerData } from "@/domain/model/Ticker";
import { TickerResponse } from "@/domain/model/TickerResponse";

class WebSocketClient {
    private socket: WebSocket;

    constructor(url: string) {
        this.socket = new WebSocket(url);
    }

    // Subscribe to the market and start listening for data
    public subscribe(request: unknown, callback: (data: TickerData[]) => void) {
        this.socket.addEventListener('open', () => {
            this.socket.send(JSON.stringify(request));
        });

        this.socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);

            if (data?.data == undefined) {
                return;
            }

            const temp: TickerData[] = data.data.map((d: TickerResponse) => {
                return (
                    {
                        symbol: d.s,
                        lastPrice: d.c,
                        priceChangePercent: d.P
                    }
                )
            });
            callback(temp);
        });
    }

    // Unsubscribe from the market and stop listening for data
    public unsubscribe(request: unknown) {
        this.socket.send(JSON.stringify(request));
    }
}

export default WebSocketClient;