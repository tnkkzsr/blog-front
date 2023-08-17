import React from 'react'
import Link from "next/link";
import { Block } from './Block'
import { Overlay } from './Overlay';

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
