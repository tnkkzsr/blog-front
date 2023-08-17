import React,{FunctionComponent} from 'react'
import Image from 'next/image';

import { Block } from "@/features/base/components/Block";
import { Relative } from "@/features/base/components/Relative";
import { Inline } from "@/features/base/components/Inline";
import { Description } from "@/features/base/components/Description";
import { Absolute } from "@/features/base/components/Absolute";


interface Props {
    className?: string;
}

export const PostCard: FunctionComponent<Props> = ({
    className,
}) => {
    return (
        <Block
            className={`w-full max-w-[350px] 
            bg-white 
            rounded-xl shadow-md
            overflow-hidden    
            ${className || ""}`}
        >

            <Relative className='h-[160px] transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer'>
               <Image src={"/images/header.png"} fill sizes="100%" alt="...image"/>
            </Relative>
            <Relative className='h-[180px] p-8'>
                <Block className={`
                    flex flex-row space-x-2
                `}>
                    <Inline className={`
                        px-2 py-1
                        border border-gray-400
                        text-gray-500 font-medium
                    `}>
                        未分類
                    </Inline>

                </Block>

                <Description className='mt-2 text-2xl font-bold cursor-pointer hover:scale-105 transition duration-300'>
                    ブログタイトル
                </Description>

                <Absolute className='bottom-3 right-4'>
                    <Inline className={`${className} text-gray-500`}>36分前</Inline>
                </Absolute>
              
            </Relative>

        </Block>
    )

}