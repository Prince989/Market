'use client'
import useTickerData from '@/hooks/useTickerData'
import React from 'react'
import ListViewItem from '../ListViewItem';

export default function ListView() {

    const {tickers} = useTickerData();

    if(tickers.length < 1)
        return (
            <div>
                
            </div>
        )

    return (
        <div className="border overflow-auto rounded-lg h-screen border-gray-400 p-2" style={{maxWidth : "500px", width : (window.innerWidth < 500 ? window.innerWidth : 500)}}>
            {
                tickers.map((ticker) => (
                    <ListViewItem ticker={ticker} />
                ))
            }
        </div>
    )
}
