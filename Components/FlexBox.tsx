import React from 'react'
import Heading from './Closures/Heading'
import Footer from './Closures/Footer'

const FlexBox = () => {
    return (
        <div className='p-8 space-y-10'>
            <div className="flex flex-row space-x-2">
                <div className="basis-1/4 border-2 rounded-lg">01</div>
                <div className="basis-1/4 border-2 rounded-lg">02</div>
                <div className="basis-1/2 border-2 rounded-lg">03</div>
            </div>

            <div className="flex flex-col space-x-2">
                <div className="basis-1/4 border-2 rounded-lg">01</div>
                <div className="basis-1/4 border-2 rounded-lg">02</div>
                <div className="basis-1/2 border-2 rounded-lg">03</div>
            </div>

            <div className="flex flex-wrap space-x-2">
                <div className='border-2 w-[300px] h-[300px]'>01</div>
                <div className='border-2 w-[300px] h-[300px]'>02</div>
                <div className='border-2 w-[300px] h-[300px]'>03</div>
            </div>

            <div className="flex space-x-2">
                <div className="flex-none w-14 h-14 border-2 rounded-lg">
                    01
                </div>
                <div className="grow h-14 border-2 rounded-lg">
                    02
                </div>
                <div className="flex-none w-14 h-14 border-2 rounded-lg">
                    03
                </div>
            </div>

            <div className="flex space-x-2">
                <div className="flex-none w-14 h-14 border-2 rounded-lg">
                    01
                </div>
                <div className="shrink h-14 border-2 rounded-lg">
                    02
                </div>
                <div className="flex-none w-14 h-14 border-2 rounded-lg">
                    03
                </div>
            </div>

            <Heading title="Justify Content" />
            <div>
                <div className='flex justify-start'>Justify Content Start</div>
                <div className='flex justify-center'>Justify Content Center</div>
                <div className='flex justify-end'>Justify Content End</div>
            </div>
            <Footer />

            <Heading title="Align Items" />
            <div className='h-[200px] flex items-start border-2'>
                <div>Align Items Start</div>
            </div>

            <div className='h-[200px] flex items-center border-2'>
                <div>Align Items Center</div>
            </div>

            <div className='h-[200px] flex items-end border-2'>
                <div>Align Items end</div>
            </div>
            <Footer />

        </div>
    )
}

export default FlexBox