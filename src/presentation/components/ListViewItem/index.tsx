import { TickerData } from '@/domain/model/Ticker'
import React from 'react'

interface IProps {
    ticker: TickerData
}

export default function ListViewItem(props: IProps) {
    const { ticker } = props;

    return (
        <div className="px-3 py-1 rounded-lg hover:bg-slate-600">
            <div className="flex justify-between text-gray-300 text-lg">
                <div>
                    {ticker.symbol}
                </div>
                <div className="font-semibold">
                    {ticker.lastPrice}
                </div>
            </div>
            <div className="flex justify-between text-sm">
                <div className="text-slate-400">
                    Perpetual
                </div>
                <div className={"font-semibold " + (parseFloat(ticker.priceChangePercent) > 0 ? 'text-emerald-600' : 'text-rose-400')}>
                    {parseFloat(ticker.priceChangePercent) > 0 ? `+${ticker.priceChangePercent}` : ticker.priceChangePercent}
                </div>
            </div>
        </div>
    )
}
