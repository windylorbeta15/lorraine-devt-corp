import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-4'>
      {/* <Image
        src='/images/logo/lorraine-logo.png'
        alt='logo'
        width={117}
        height={34}
        // className='w-fit'
        quality={100}
      /> */}
      <p className='text-white text-2xl font-semibold uppercase '> Lorraine Devt Corp</p>
    </Link>
  )
}

export default Logo
