import React from 'react'
import Heading from './Closures/Heading'
import Footer from './Closures/Footer'
import { Rubik_Bubbles } from 'next/font/google'

const RubikFont = Rubik_Bubbles({ weight: "400", subsets: [] })

const Typography = () => {
    return (
        <div className='p-8'>
            {/* Font Family */}
            <Heading title="Font Family" />
            <div className='font-sans'>Font Family - Sans</div>
            <div className='font-serif'>Font Family - Serif</div>
            <div className='font-mono'>Font Family - Mono</div>
            <Footer />


            {/* Using Google Fonts */}
            <Heading title="Google Fonts" />
            <div className={`${RubikFont.className}`}>Font Family - Rubik</div>
            <Footer />


            {/* Font Size */}
            <Heading title="Font Size" />
            <div className='text-xs'>Font size - Extra Small</div>
            <div className='text-sm'>Font size - Small</div>
            <div className='text-base'>Font size - Base</div>
            <div className='text-lg'>Font size - Large</div>
            <div className='text-xl'>Font size - Extra Large</div>
            <div className='text-2xl'>Font size - Extra Large(2)</div>
            <div className='text-3xl'>.....</div>
            <div className='text-9xl'>Font size - Extra Large(9)</div>
            <Footer />


            {/* Font Style */}
            <Heading title="Font Style" />
            <div className="italic">Font Style - Italic</div>
            <div className="underline">Font Style - Underline</div>
            <Footer />


            {/* Font Weight */}
            <Heading title="Font Weights" />
            <div className='font-thin'>Font weight - Thin</div>
            <div className='font-extralight'>Font weight - Extra Light</div>
            <div className='font-light'>Font weight - Light</div>
            <div className='font-normal'>Font weight - Normal</div>
            <div className='font-medium'>Font weight - Medium</div>
            <div className='font-semibold'>Font weight - Semi Bold</div>
            <div className='font-bold'>Font weight - Bold</div>
            <div className='font-extrabold'>Font weight - Extra Bold</div>
            <div className='font-black'>Font weight - Black</div>
            <Footer />


            {/* Letter Spacing */}
            <Heading title="Letter Spacing" />
            <div className='tracking-tighter'>Letter spacing - Tighter</div>
            <div className='tracking-tight'>Letter spacing - Tight</div>
            <div className='tracking-normal'>Letter spacing - Normal</div>
            <div className='tracking-wide'>Letter spacing - Wide</div>
            <div className='tracking-wider'>Letter spacing - Wider</div>
            <div className='tracking-widest'>Letter spacing - Widest</div>
            <Footer />


            {/* Line Height */}
            <Heading title="Line Height" />
            <div className='leading-3'>Line height - 0.75rem (12px)</div>
            <div className='leading-4'>Line height - 1rem (16px)</div>
            <div className='leading-5'>Line height - 1.25rem (20px)</div>
            <div className='leading-6'>Line height - 1.5rem (24px)</div>
            <div className='leading-7'>Line height - 1.75rem (28px)</div>
            <div className='leading-8'>Line height - 2rem (32px)</div>
            <div className='leading-9'>Line height - 2.25rem (36px)</div>
            <div className='leading-10'>Line height - 2.5rem (40px)</div>
            <div className='leading-none'>Line height - 1</div>
            <div className='leading-tight'>Line height - 1.25</div>
            <div className='leading-snug'>Line height - 1.375</div>
            <div className='leading-normal'>Line height - 1.5</div>
            <div className='leading-relaxed'>Line height - 1.625</div>
            <div className='leading-loose'>Line height - 2</div>
            <Footer />


            {/* Text Alignment */}
            <Heading title="Text Alignment" />
            <div className='text-left'>Text align - Left</div>
            <div className='text-center'>Text align - Center</div>
            <div className='text-right'>Text align - Right</div>
            <div className='text-start'>Text align - Start</div>
            <div className='text-end'>Text align - End</div>
            <Footer />


            {/* Text Color */}
            <Heading title="Text Color" />
            <div className='text-violet-800'>Text Color - Violet</div>
            <div className='text-[#919191]'>Custom Color - Grey</div>
            <Footer />


            {/* Text Decoration */}
            <Heading title="Text Decoration" />
            <div className='underline'>Text decoration - Underline</div>
            <div className='overline'>Text decoration - Overline</div>
            <div className='line-through'>Text decoration - Line through</div>
            <div className='no-underline'>Text decoration - None</div>
            <Footer />


            {/* Text Transform */}
            <Heading title="Text Transform" />
            <div className='uppercase'>Text transform - Uppercase</div>
            <div className='lowercase'>Text transform - Lowercase</div>
            <div className='capitalize'>Text transform - Capitalize</div>
            <div className='normal-case'>Text transform - None</div>
            <Footer />


            {/* Text Indent */}
            <Heading title="Text Indent" />
            <div className='indent-1'>Text indent - 0.25rem (4px)</div>
            <div className='indent-1.5'>Text indent - 0.375rem (6px)</div>
            <div className='indent-2'>Text indent - 0.5rem (8px)</div>
            <div className='indent-2.5'>Text indent - 0.625rem (10px)</div>
            <div className='indent-3'>Text indent - 0.75rem (12px)</div>
            <Footer />


            {/* Whitespace */}
            {/* Refer docs */}
            {/* https://tailwindcss.com/docs/whitespace */}

        </div>
    )
}

export default Typography