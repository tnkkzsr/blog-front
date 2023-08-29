import React from 'react'

import {FaTwitter} from 'react-icons/fa'

import {Card} from '../base/components/container/Card'
import { FilledImage } from '../base/components/display/FilledImage'
import { Title } from '../base/components/display/Title'
import { Block } from '../base/components/container/Block'
import Link from "next/link";

export const ProfilePanel = () => {
  return (
    
    <Card className='p-4 flex flex-col items-center'>
        <FilledImage src='/images/img03.png'/>
        <Title type='h2'>Kazushiro</Title>

        <Block className='mt-4 break-words text-gray-500'>
            <p>初めまして、Kazushiroです!</p>
            <p>Python/JavaScript...etc</p>

        </Block>

        <Block className='mt-3'>
            <Link href="#" target='_blank'>
                <FaTwitter className="w-8 h-8 text-sky-500" />
            </Link>
        </Block>


        
    </Card>
  )
}
