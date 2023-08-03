'use client'
import TickerUseCase from '@/application/useCases/TickerUseCase';
import { TickerData } from '@/domain/model/Ticker';
import { useEffect, useState } from 'react'

export default function useTickerData() {
    const [tickers, setTickers] = useState<TickerData[]>([]);

    useEffect(() => {
        const tickerUseCase = new TickerUseCase();

        const handleTickerUpdate = (data: TickerData[]) => {
            setTickers(data);
        };

        // Subscribe to the market and start receiving data
        tickerUseCase.subscribeToTickerStream(handleTickerUpdate);

        // Unsubscribe from the market and stop receiving data on component unmount
        return () => {
            tickerUseCase.unsubscribeFromTickerStream();
        };
    }, []);

    return (
        {
            tickers: tickers
        }
    )
}
