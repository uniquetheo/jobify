import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex h-full items-center">
        <Image src='/../LogoIcon.svg' alt='logo icon' width={30} height={30} className='' />
    </div>
  )
}

export default Logo