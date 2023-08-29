import React from 'react'
import Link from "next/link";
import { Block } from '../../base/components/container/Block'
import { Overlay } from '../../base/components/Overlay';

export const Header = () => {
  return (
    <header className="md:h-[180px] bg-[url('/images/mauntain.png')] ">
      <Overlay className='flex items-center justify-center'>
        <Link href="/">
          <Block
            className='text-3xl md:text-6xl font-bold text-white '>
            Kazu Blog
          </Block>

        </Link>
      </Overlay>
    </header>


  )
}
