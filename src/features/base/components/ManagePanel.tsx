import React from 'react'
import Link from 'next/link'

import { Card } from './Card'
import { Block } from './Block'
import { Title } from './Title'
import {BsKeyFill} from 'react-icons/bs'

export const ManagePanel = () => {
  return (
    <Card className='w-full p-4'>
        <Title className='max-w-fit border-b-2 border-gray-400' >管理者</Title>
        <Link href="/manage" className='corsor-pointer'>
            <Block
                className={`
                mt-2 p-1
                flex items-center flex-row space-x-1
                border-transparent
                text-gray-500 border-b hover:border-gray-400`}
            >

                <BsKeyFill className='w-6 h-6'/>
                <Block>記事管理</Block>
            </Block>
              
        
        
        </Link>

    </Card>
  )
}