import React from 'react'
import { Block } from './Block'

export const SearchBox = () => {
  return (
    <Block className="border">
        <input 
            className={`w-full
            px-2 py-4
            rounded-md border outline-none
            focus:border-gray-500`} 
            placeholder='検索...'/>
    </Block>
  )
}



