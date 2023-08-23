import React,{FunctionComponent} from 'react'
import Image from 'next/image';

import { Block } from "@/features/base/components/container/Block";
import { Relative } from "@/features/base/components/container/Relative";
import { Inline } from "@/features/base/components/container/Inline";
import { Description } from "@/features/base/components/display/Description";
import { Absolute } from "@/features/base/components/container/Absolute";
import {Post} from "@/features/post/types";


interface Props {
    post:Post;
    className?: string;
}

//時間表記の変更
const  formatDate = (updated_at:string):string =>{
    
    const nowDate = new Date();
    const updatedDate = new Date(updated_at);
    const diff = nowDate.getTime() - updatedDate.getTime();
    
    const diffMin = Math.floor(diff / 60000);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if(diffMin <60) return `${diffMin}分前`;
    else if(diffHour < 24) return `${diffHour}時間前`;
    else if(diffDay < 7) return `${diffDay}日前`;
    else return updatedDate.toLocaleDateString('ja-JP');

}

export const PostCard: FunctionComponent<Props> = ({
    className,post
}) => {

    const updated_at = formatDate(post.updated_at!);
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
                    {post.title}
                </Description>

                <Absolute className='bottom-3 right-4'>
                    <Inline className={`${className} text-gray-500`}>{updated_at}</Inline>
                </Absolute>
              
            </Relative>

        </Block>
    )

}