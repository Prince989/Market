import React, { ReactElement } from 'react'

interface IProps {
    children: ReactElement | ReactElement[]
}

export default function Container(props: IProps) {

    const {children} = props;

    return (
        <div className="bg-slate-700 p-2 flex justify-center">
            {children}
        </div>
    )
}
