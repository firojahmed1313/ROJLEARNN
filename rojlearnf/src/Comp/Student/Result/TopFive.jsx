import React from 'react'
import { Icon } from '@iconify-icon/react';
const colors = [
    {
        main: 'text-[#ff5757]',
        background: 'bg-green-200'
    },
    {
        main: 'text-[#ffb01f]',
        background: 'bg-orange-200'
    },
    {
        main: 'text-[#00bd91]',
        background: 'bg-sky-200'
    },
    {
        main: 'text-[#1125d4]',
        background: 'bg-indigo-200'
    },
];
const TopFive = (props) => {
    return (
        <>
            <div className={`flex justify-between ${colors[props.colorIndex].background} items-center p-4 rounded-xl shadow`}>
                <div className="flex space-x-3">
                    <Icon icon={props.source} width="24" height="24" className={`${colors[props.colorIndex].main} font-hankengrotesk text-lg sm:text-base`} />
                    <span className={`${colors[props.colorIndex].main} font-hankengrotesk text-lg sm:text-base`}>{props.category}</span>
                </div>
                <div>
                    <span className="font-hankengrotesk text-lg sm:text-base font-bold">{props.score}</span>
                    <span className="font-hankengrotesk text-lg sm:text-base text-[#868593]"> / 100</span>
                </div>

            </div>
        </>
    )
}

export default TopFive