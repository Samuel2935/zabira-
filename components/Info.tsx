import Image from 'next/image'
import React from 'react'

function Info() {
  return (
<div className="flex gap-4 mt-4 w-full">
  <div className="flex-1">
    <Image
      src="/Card 4 (1).png"
      alt="frame"
      className="w-full h-auto object-cover"
      width={599.5}
      height={166.26}
    />
  </div>
  <div className="hidden md:flex flex-1">
    <Image
      src="/Card 3 (1).png"
      alt="frame"
      className="w-full h-auto object-cover"
      width={599.5}
      height={166.26}
    />
  </div>
</div>

  )
}

export default Info