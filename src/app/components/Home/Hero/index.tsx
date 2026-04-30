'use client'

import { useEffect, useState } from 'react'
import { FeaturesType } from '@/app/types/features'

type HeroFeatureIconProps = {
  className?: string
  isActive?: boolean
}

const HERO_BACKGROUND_IMAGES = [
  '/images/hero/ldc-bg-img1.png',
  '/images/hero/ldc-bg-img3.png',
  '/images/hero/ldc-bg-img2.png',
  '/images/hero/ldc-bg-img4.png',
] as const

/** Raster hero icons: mask + background so inactive = white, active = green-apple (matches SVG stroke). */
const HeroRasterIcon = ({
  className,
  isActive,
  src,
}: HeroFeatureIconProps & { src: string }) => (
  <span
    aria-hidden
    className={`inline-block shrink-0 transition-colors duration-300 ease-out ${
      isActive ? 'bg-green-apple' : 'bg-white'
    } ${className ?? ''}`}
    style={{
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
    }}
  />
)

const HERO_RASTER_ICON_SIZE = '!h-10 !w-10'

const IconHandsPlant = ({ className, ...rest }: HeroFeatureIconProps) => (
  <HeroRasterIcon
    {...rest}
    className={[className, HERO_RASTER_ICON_SIZE].filter(Boolean).join(' ')}
    src='/images/Logo/hand-holding-leaves.png'
  />
)

const IconPotShovel = ({ className, ...rest }: HeroFeatureIconProps) => (
  <HeroRasterIcon
    {...rest}
    className={[className, HERO_RASTER_ICON_SIZE].filter(Boolean).join(' ')}
    src='/images/Logo/seeding.png'
  />
)

const IconSmartFarming = ({ className, ...rest }: HeroFeatureIconProps) => (
  <HeroRasterIcon
    {...rest}
    className={[className, HERO_RASTER_ICON_SIZE].filter(Boolean).join(' ')}
    src='/images/Logo/smart-farming.png'
  />
)

const IconFish = ({ className, ...rest }: HeroFeatureIconProps) => (
  <HeroRasterIcon
    {...rest}
    className={[className, HERO_RASTER_ICON_SIZE].filter(Boolean).join(' ')}
    src='/images/Logo/fish.png'
  />
)

const heroFeatures = [
  {
    title: 'From Seed to Strength',
    Icon: IconHandsPlant,
    imageIndex: 0,
  },
  {
    title: 'Healthier Crops, Stronger Yields',
    Icon: IconPotShovel,
    imageIndex: 1,
  },
  {
    title: 'Innovative Tools For Better Farming',
    Icon: IconSmartFarming,
    imageIndex: 2,
  },
  {
    title: 'Next-Generation Fish Farming Systems',
    Icon: IconFish,
    imageIndex: 3,
  },
] as const

const HERO_BG_CROSSFADE_MS = 800
const HERO_AUTO_ROTATE_MS = 3000

const Hero = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)
  const [autoRotateEpoch, setAutoRotateEpoch] = useState(0)
  const bgIndex = heroFeatures[activeFeatureIndex]
    .imageIndex as 0 | 1 | 2 | 3

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const id = window.setInterval(() => {
      setActiveFeatureIndex((i) => (i + 1) % heroFeatures.length)
    }, HERO_AUTO_ROTATE_MS)
    return () => window.clearInterval(id)
  }, [autoRotateEpoch])

  return (
    <section
      id='home-section'
      className='relative flex min-h-[min(100svh,56rem)] flex-col overflow-hidden bg-black py-0 md:min-h-[min(100svh,60rem)]'
    >
      <div className='pointer-events-none absolute inset-0' aria-hidden>
        {HERO_BACKGROUND_IMAGES.map((src, i) => {
          const isActive = bgIndex === i
          return (
            <div
              key={src}
              className='absolute inset-0 bg-cover bg-center bg-no-repeat motion-safe:transition-opacity motion-safe:ease-out motion-reduce:transition-none'
              style={{
                backgroundImage: `url(${src})`,
                opacity: isActive ? 1 : 0,
                transitionDuration: `${HERO_BG_CROSSFADE_MS}ms`,
              }}
            />
          )
        })}
      </div>
      <div className='container w-full flex-1 pt-16 xl:pt-7 content-end'>
        <div className='flex justify-center w-full'>
            <h2 className='relative z-10 font-thin mb-15 text-white opacity-100 lg:text-center text-center sm:leading-20 leading-16'>
            Cultivating Growth. Harvesting Opportunity.
            </h2>


          {/* <div className='col-span-1 max-w-xs flex justify-center relative'>
            <h1 className='font-semibold mb-5 text-white lg:text-center text-center sm:leading-20 leading-16'>
              Organic Dairy Farming
            </h1>
          </div> */}
        </div>
      </div>

      <div className='relative z-10 mt-auto w-full'>
        <div className='relative h-0.5 w-full bg-white/25' aria-hidden>
          <div
            className='absolute top-0 left-0 h-full w-1/4 bg-green-apple transition-transform duration-300 ease-out'
            style={{
              transform: `translateX(${activeFeatureIndex * 100}%)`,
            }}
          />
        </div>

        <div className='bg-black/40 backdrop-blur-md border-t border-white/10'>
          <div className='py-6 sm:py-6'>
            <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-0'>
              {heroFeatures.map((feature, index) => {
                const { title, Icon } = feature
                const isActive = activeFeatureIndex === index

                return (
                  <li
                    key={title}
                    className='flex w-full flex-col items-center text-center gap-4'
                  >
                    <button
                      type='button'
                      aria-pressed={isActive}
                      aria-label={`${title}. Sets the matching hero background image and selects highlight.`}
                      onClick={() => {
                        setActiveFeatureIndex(index)
                        setAutoRotateEpoch((n) => n + 1)
                      }}
                      className='flex w-full cursor-pointer flex-col items-center gap-4 rounded-xl p-2 text-inherit transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-apple'
                    >
                      <span className='flex w-full justify-center'>
                        <Icon
                          isActive={isActive}
                          className={`pointer-events-none h-14 w-14 shrink-0 transition-colors ${
                            isActive ? 'text-green-apple' : 'text-white'
                          }`}
                        />
                      </span>
                      <p
                        className={`pointer-events-none text-sm leading-snug font-semibold transition-colors sm:text-base ${
                          isActive ? 'text-green-apple' : 'text-white'
                        }`}
                      >
                        {title}
                      </p>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
