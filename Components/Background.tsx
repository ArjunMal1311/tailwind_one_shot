import React from 'react'
import Heading from './Closures/Heading'
import Footer from './Closures/Footer'

const Background = () => {
    return (
        <div className='p-8 space-y-5'>
            {/* Background Color */}
            <Heading title="Background Color" />
            <div className='h-[100px] w-[100px] bg-red-600'>
                Red
            </div>

            <div className='h-[100px] w-[100px] bg-[#e28989]'>
                Hex code - Light red
            </div>
            <Footer />


            {/* Background Image */}
            <Heading title="Background Image" />
            <div>
                <div className='h-[100px] w-[100px] bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")]'></div>
            </div>
            <Footer />


            {/* Background Position */}
            <Heading title="Background Posiiton" />
            <div>
                <div className='h-[100px] w-[100px] bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] bg-bottom'></div>
                <div>Position - bottom</div>
                <div>Similarly we have top right left right-top right-left and all</div>
            </div>
            <Footer />


            {/* Background Size */}
            <Heading title="Background Size" />
            <div>
                <div className='h-[100px] w-[100px] bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] bg-cover'></div>
                <div>Size - Cover</div>
            </div>
            <div>
                <div className='h-[100px] w-[100px] bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] bg-contain'></div>
                <div>Size - Contain</div>
            </div>
            <Footer />


            {/* Background Repeat */}
            <Heading title="Background Repeat" />
            <div>
                <div className='h-[400px] w-[800px]  bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] bg-repeat bg-bottom'></div>
                <div>Background - Repeat</div>
            </div>
            <Footer />


            {/* Background Gradient */}
            <Heading title="Background Gradient" />
            <div>
                <div className='h-[400px] w-[800px] bg-gradient-to-r from-pink-500 to-violet-500'></div>
                <div>Background - Gradient</div>
            </div>
            <Footer />


            {/* BG-Clip-Text */}
            <Heading title="Background Clip Text" />
            <div className="text-5xl font-extrabold ...">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Hello world
                </span>
            </div>
            <Footer />
        </div>
    )
}

export default Background