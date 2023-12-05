import React from 'react'

const Grid = () => {
    return (
        <div className='p-8'>
            <div>
                <div className="grid grid-cols-4 gap-4">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div className='col-span-2'>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
                    <div>09</div>
                </div>
            </div>
        </div>
    )
}

export default Grid