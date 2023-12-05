import React from 'react'
import Heading from './Closures/Heading'
import Footer from './Closures/Footer'

const Sizing = () => {
    return (
        <div className='p-8 space-y-10'>
            {/* Width */}
            <Heading title="Width" />
            <div className='w-40 border-t'>Width : 160px</div>

            <div className='w-screen border-t'>Width : Screen Size (100vw)</div>
            <div className='w-1/2 border-t'>Width 50% (Relative to parent)</div>
            <div className='w-1/3 border-t'>Width 33% (Relative to parent)</div>
            <div className='w-1/4 border-t'>Width 25% (Relative to parent)</div>

            <div>Similarly we have 2/3, 3/4, 1/5, 2/5, 3/5, 4/5, 5/6, 1/12, 2/12, 7/12, 8/12, 9/12, 10/12, 11/12</div>

            <div className='w-full border-t'>Width : 100%</div>

            <div className='w-96 border-t'>
                <div className='w-1/2 border-t mt-3'>Width 50% </div>
                <div>(Inside another div of w-96)</div>
            </div>

            <div className='w-[465px] border-t'>Custom width : 465px</div>

            <div className='w-fit border-t'>Width Fit</div>
            <Footer />


            {/* Min-Width */}
            <Heading title="Min and Max Width Concept" />

            <div className='w-[500px] border-t'>
                <div className='italic'>Parent</div>
                {/* Content with min-width */}
                <div className='min-w-[465px] border-t mt-4'>
                    Content with min-width (min-w-[465px])
                </div>

                {/* Content with max-width */}
                <div className='max-w-[600px] border-t mt-4'>
                    Content with max-width (max-w-[600px])
                </div>
            </div>
            <Footer />


            {/* Height */}
            <Heading title="Height" />

            <div className='h-40 border-t border-b'>Height: 160px</div>

            <div className='h-screen border-t border-b'>Height: Screen Size (100vh)</div>

            <div>
                Similarly, we have 2/3, 3/4, 1/5, 2/5, 3/5, 4/5, 5/6, 1/12, 2/12, 7/12, 8/12, 9/12, 10/12, 11/12
            </div>

            <div className='h-full border-t'>Height: 100%</div>

            <div className='h-96 border-t border-b border-blue-500'>
                <div className='h-1/2 border-t mt-3 border-b border-red-500'>Height: 50% </div>
                <div className='italic'>(Inside another div of h-96)</div>
            </div>

            <div className='h-96 border-t border-b border-blue-500'>
                <div className='h-1/3 border-t mt-3 border-b border-red-500'>Height: 33% </div>
                <div className='italic'>(Inside another div of h-96)</div>
            </div>

            <div className='h-[465px] border-t border-b'>Custom height: 465px</div>

            <div className='h-fit border-t border-b'>Width Fit</div>
            <Footer />

            {/* Min-Height and Max-Height */}
            <Heading title="Min and Max Height Concept" />

            <div className='h-[200px] border-t'>
                <div className='italic'>Parent</div>
                {/* Content with min-height */}
                <div className='min-h-[150px] border-t border-b mt-4'>
                    Content with min-height (min-h-[150px])
                </div>

                {/* Content with max-height */}
                <div className='max-h-[250px] border-t border-b mt-4'>
                    Content with max-height (max-h-[250px])
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Sizing