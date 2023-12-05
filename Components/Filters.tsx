import React from 'react'
import Heading from './Closures/Heading'
import Footer from './Closures/Footer'

const Filters = () => {
    return (
        <div className='p-8'>
            {/* Shadow */}
            <Heading title="Shadow" />
            <div className='shadow-md p-4 mb-4 w-fit bg-white rounded-md'>
                Shadow Medium (shadow-md)
            </div>

            <div className='shadow-lg p-4 mb-4 w-fit bg-white rounded-md'>
                Shadow Large (shadow-lg)
            </div>

            <div className='shadow-xl p-4 mb-4 w-fit bg-white rounded-md'>
                Shadow Extra Large (shadow-xl)
            </div>

            <div className='shadow-2xl p-4 mb-4 w-fit bg-white rounded-md'>
                Shadow 2 Extra Large (shadow-2xl)
            </div>

            <div className='shadow-lg p-4 mb-4 w-fit bg-white rounded-md shadow-slate-600'>
                Shadow Large (shadow-lg) with color
            </div>
            <Footer />


            {/* Opacity */}
            <Heading title="Opacity" />
            <div className='p-4 mb-4 w-fit bg-white rounded-md opacity-50'>
                Element with Opacity 50
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md opacity-60'>
                Element with Opacity 60
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md opacity-70'>
                Element with Opacity 70
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md opacity-75'>
                Element with Opacity 75
            </div>
            <Footer />


            {/* Blur */}
            <Heading title="Blur" />
            <div className='p-4 mb-4 w-fit bg-white rounded-md blur-sm'>
                Element with Blur 4px (blur-sm)
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md blur'>
                Element with Blur 8px (blur)
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md blur-md'>
                Element with Blur 12px (blur-md)
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md blur-lg'>
                Element with Blur 16px (blur-lg)
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md blur-xl'>
                Element with Blur 24px (blur-xl)
            </div>
            <Footer />


            {/* Brightness */}
            <Heading title="Brightness" />
            <div className='p-4 mb-4 w-fit bg-white rounded-md brightness-75'>
                Element with Brightness 0.75 (brightness-75)
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md brightness-90'>
                Element with Brightness 0.9 (brightness-90)
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md brightness-95'>
                Element with Brightness 0.95 (brightness-95)
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md brightness-100'>
                Element with Brightness 1 (brightness-100)
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md brightness-105'>
                Element with Brightness 1.05 (brightness-105)
            </div>

            <div className='p-4 mb-4 w-fit bg-white rounded-md brightness-110'>
                Element with Brightness 1.1 (brightness-110)
            </div>
            <Footer />
        </div>
    )
}

export default Filters