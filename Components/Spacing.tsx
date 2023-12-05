import React from 'react'
import Heading from './Closures/Heading'
import Footer from './Closures/Footer'

const Spacing = () => {
    return (
        <div className='p-8'>
            {/* Padding */}
            <Heading title="Padding" />
            <div className='px-5 border w-fit'>Horizontal padding - 5 (20px)</div>
            <div className='py-5 border w-fit'>Vertical padding - 5 (20px)</div>
            <div className='pt-5 border w-fit'>Top padding - 5 (20px)</div>
            <div className='pb-5 border w-fit'>Bottom padding - 5 (20px)</div>
            <div className='pr-5 border w-fit'>Right padding - 5 (20px)</div>
            <div className='pl-5 border w-fit'>Left padding - 5 (20px)</div>
            <Footer />

            {/* Margin */}
            <Heading title="Margin" />
            <div className='mx-5 border w-fit'>Horizontal margin - 5 (20px)</div>
            <div className='my-5 border w-fit'>Vertical margin - 5 (20px)</div>
            <div className='mt-5 border w-fit'>Top margin - 5 (20px)</div>
            <div className='mb-5 border w-fit'>Bottom margin - 5 (20px)</div>
            <div className='mr-5 border w-fit'>Right margin - 5 (20px)</div>
            <div className='ml-5 border w-fit'>Left margin - 5 (20px)</div>
            <Footer />

        </div>
    )
}

export default Spacing