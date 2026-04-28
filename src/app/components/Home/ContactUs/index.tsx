'use client'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const ContactUs = () => {
  return (
    <section className='relative overflow-hidden md:py-20'>
      <div className='container my-20'>
        <div className='bg-primary rounded-Newsletter grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8'>
          <div className='md:col-span-7'>
            <div className='m-5 sm:m-10 lg:ml-32 lg:mt-20 lg:mb-20'>
              <p className='text-lg font-normal text-white mb-3 tracking-widest'>
                CONTACT US
              </p>
              <h2 className='text-white mb-8'>
                Reach out to us for any questions or inquiries.
              </h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full max-w-xl'>
                <input
                  type='text'
                  name='message'
                  className='pl-4 pr-16 py-4 text-sm w-full bg-white text-black rounded-full focus:outline-hidden focus:text-black'
                  placeholder='Your email or message…'
                  autoComplete='off'
                />
                <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                  <button
                    type='submit'
                    className='p-1 bg-gray-900 hover:scale-110 duration-300 rounded-full hover:cursor-pointer'
                    aria-label='Submit inquiry'>
                    <Icon
                      icon='tabler:arrow-narrow-right'
                      width='28'
                      height='28'
                      className='text-white '
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='md:col-span-5 relative hidden md:block'>
            <div>
              <Image
                src={'/images/Overlay/fish-overlay.png'}
                alt='soup-image'
                width={600}
                height={600}
                className='-mt-20'
              />
            </div>
            <div className='absolute top-[78%]'>
              <Image
                src={'/images/Newsletter/onion.webp'}
                alt='onion-image'
                width={300}
                height={122}
              />
            </div>
            <div className='absolute top-[30%] right-[-23%]'>
              <Image
                src={'/images/Newsletter/lec.webp'}
                alt='lettuce-image'
                width={300}
                height={122}
              />
            </div>
            <div className='absolute bottom-[1%] left-[-15%]'>
              <Image
                src={'/images/Overlay/spoon-grains-overlay.png'}
                alt='Rice Grains'
                width={200}
                height={200}
              />
            </div>
            <div className='absolute bottom-[1%] right-[7%] rotate-[20deg]'>
              <Image
                src={'/images/Overlay/glass-milk-overlay.png'}
                alt='Glass Milk'
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
